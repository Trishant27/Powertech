import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useParallax3D — scroll-driven 3D parallax hook
 *
 * @param {Object} opts
 * @param {number} opts.rotateX      max X rotation in deg   (default 0)
 * @param {number} opts.rotateY      max Y rotation in deg   (default 0)
 * @param {number} opts.translateZ   max Z translation in px (default 0)
 * @param {number} opts.translateY   max Y translation in px (default 0)
 * @param {number} opts.scale        scale multiplier        (default 1)
 * @param {number} opts.speed        parallax speed mult     (default 1)
 * @param {boolean} opts.fadeIn      fade in on enter         (default true)
 * @param {string}  opts.origin      transform-origin         (default 'center')
 *
 * @returns {{ ref: React.RefObject, style: React.CSSProperties, inView: boolean }}
 */
const useParallax3D = ({
  rotateX = 0,
  rotateY = 0,
  translateZ = 0,
  translateY = 0,
  scale = 1,
  speed = 1,
  fadeIn = true,
  origin = 'center',
} = {}) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    opacity: fadeIn ? 0 : 1,
    transform: 'translate3d(0,40px,0) rotateX(0deg) rotateY(0deg) scale(0.97)',
    transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease',
    transformOrigin: origin,
    willChange: 'transform, opacity',
  });
  const [inView, setInView] = useState(false);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const winH = window.innerHeight;

    // progress: 0 when element bottom enters viewport, 1 when element top reaches viewport top
    const progress = Math.min(
      Math.max((winH - rect.top) / (winH + rect.height), 0),
      1
    );

    // Centred progress: –1 → 0 → 1 (0 = element centred in viewport)
    const centred = (progress - 0.5) * 2;

    const entered = progress > 0.05;
    setInView(entered);

    const rX = rotateX * centred * speed;
    const rY = rotateY * centred * speed;
    const tZ = translateZ * progress * speed;
    const tYOffset = entered ? translateY * centred * speed : 40;
    const s = entered ? 1 + (scale - 1) * progress : 0.97;

    setStyle({
      opacity: entered ? 1 : 0,
      transform: `translate3d(0,${tYOffset}px,${tZ}px) rotateX(${rX}deg) rotateY(${rY}deg) scale(${s})`,
      transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease',
      transformOrigin: origin,
      willChange: 'transform, opacity',
    });
  }, [rotateX, rotateY, translateZ, translateY, scale, speed, origin]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return { ref, style, inView };
};

export default useParallax3D;
