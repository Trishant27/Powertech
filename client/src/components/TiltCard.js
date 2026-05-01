import React, { useRef, useState, useCallback } from 'react';

/**
 * TiltCard — mouse-tracking 3D tilt wrapper
 *
 * Wrap any content to give it a perspective-aware 3D tilt on hover.
 * Includes optional glare/shine overlay that follows the cursor.
 *
 * @param {Object}  props
 * @param {number}  props.tiltMax       max tilt in degrees (default 12)
 * @param {number}  props.liftZ         translateZ on hover in px (default 30)
 * @param {boolean} props.glare         show glare effect (default true)
 * @param {string}  props.className     additional CSS classes
 * @param {Object}  props.style         additional inline styles
 * @param {React.ReactNode} props.children
 */
const TiltCard = ({
  children,
  tiltMax = 12,
  liftZ = 30,
  glare = true,
  className = '',
  style = {},
  ...rest
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)'
  );
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, background: '' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // Normalised –1 → 1
      const nx = (x - cx) / cx;
      const ny = (y - cy) / cy;

      const rotY = nx * tiltMax;
      const rotX = -ny * tiltMax;

      setTransform(
        `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${liftZ}px) scale(1.02)`
      );

      if (glare) {
        // Glare follows cursor
        const angle = Math.atan2(ny, nx) * (180 / Math.PI) + 180;
        const intensity = Math.sqrt(nx * nx + ny * ny) * 0.25;
        setGlareStyle({
          opacity: intensity,
          background: `linear-gradient(${angle}deg, rgba(255,107,0,${intensity * 0.3}) 0%, rgba(255,255,255,${intensity * 0.08}) 40%, transparent 80%)`,
        });
      }
    },
    [tiltMax, liftZ, glare]
  );

  const handleEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleLeave = useCallback(() => {
    setIsHovered(false);
    setTransform(
      'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)'
    );
    setGlareStyle({ opacity: 0, background: '' });
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        ...style,
        transform,
        transition: isHovered
          ? 'transform 0.15s ease-out'
          : 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',
      }}
      {...rest}
    >
      {children}

      {/* Glare overlay */}
      {glare && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            opacity: glareStyle.opacity,
            background: glareStyle.background,
            transition: isHovered
              ? 'opacity 0.15s ease-out'
              : 'opacity 0.5s ease',
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

export default TiltCard;
