import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const ringStyle = (delay) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '20px',
    height: '20px',
    marginLeft: '-10px',
    marginTop: '-10px',
    borderRadius: '50%',
    border: '1.5px solid rgba(255, 107, 0, 0.75)',
    animation: `radarRing 1.6s ease-out infinite ${delay}`,
  });

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
      <span style={ringStyle('0.55s')} />
      <span style={ringStyle('1.1s')} />

      {/* Core dot */}
      <span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '8px',
        height: '8px',
        marginLeft: '-4px',
        marginTop: '-4px',
        borderRadius: '50%',
        backgroundColor: '#FF6B00',
        boxShadow: '0 0 6px 2px rgba(255,107,0,0.6)',
      }} />
    </div>
  );
};

export default CustomCursor;
