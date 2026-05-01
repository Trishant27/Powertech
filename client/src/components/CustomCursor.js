import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Detect hover on any interactive element
    const onEnter = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const isInteractive =
        tag === 'a' ||
        tag === 'button' ||
        tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        tag === 'label' ||
        tag === 'img' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.getAttribute('role') === 'button' ||
        window.getComputedStyle(e.target).cursor === 'pointer';

      if (isInteractive) setHovered(true);
    };

    const onLeave = () => setHovered(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  const ringBase = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    pointerEvents: 'none',
    transition: 'width 0.2s, height 0.2s, margin 0.2s, border-color 0.2s',
  };

  // Ring size grows on hover
  const ringSize = hovered ? 32 : 20;
  const ringColor = hovered ? 'rgba(255,255,255,0.85)' : 'rgba(255, 107, 0, 0.75)';
  const animDuration = hovered ? '0.9s' : '1.6s';

  const ringStyle = (delay) => ({
    ...ringBase,
    width: `${ringSize}px`,
    height: `${ringSize}px`,
    marginLeft: `-${ringSize / 2}px`,
    marginTop: `-${ringSize / 2}px`,
    border: `1.5px solid ${ringColor}`,
    animation: `radarRing ${animDuration} ease-out infinite ${delay}`,
  });

  // Dot grows and turns white on hover
  const dotSize = hovered ? 14 : 8;
  const dotColor = hovered ? '#ffffff' : '#FF6B00';
  const dotGlow = hovered
    ? '0 0 10px 4px rgba(255,255,255,0.5)'
    : '0 0 6px 2px rgba(255,107,0,0.6)';

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100000,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <span style={ringStyle('0s')} />
      <span style={ringStyle('0.35s')} />
      <span style={ringStyle('0.7s')} />

      {/* Core dot */}
      <span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        marginLeft: `-${dotSize / 2}px`,
        marginTop: `-${dotSize / 2}px`,
        borderRadius: '50%',
        backgroundColor: dotColor,
        boxShadow: dotGlow,
        transition: 'width 0.2s, height 0.2s, margin 0.2s, background-color 0.2s, box-shadow 0.2s',
      }} />
    </div>
  );
};

export default CustomCursor;
