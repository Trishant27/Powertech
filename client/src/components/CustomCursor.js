import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (ring1Ref.current) {
        ring1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (ring2Ref.current) {
        ring2Ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Ring 1 */}
      <span
        ref={ring1Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          marginLeft: '-18px',
          marginTop: '-18px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 107, 0, 0.35)',
          pointerEvents: 'none',
          zIndex: 99999,
          animation: 'cursorRadar 1.6s ease-out infinite',
        }}
      />
      {/* Ring 2 — offset start */}
      <span
        ref={ring2Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          marginLeft: '-18px',
          marginTop: '-18px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 107, 0, 0.2)',
          pointerEvents: 'none',
          zIndex: 99999,
          animation: 'cursorRadar 1.6s ease-out infinite 0.55s',
        }}
      />
      {/* Core dot */}
      <span
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '10px',
          height: '10px',
          marginLeft: '-5px',
          marginTop: '-5px',
          borderRadius: '50%',
          backgroundColor: '#FF6B00',
          pointerEvents: 'none',
          zIndex: 100000,
          boxShadow: '0 0 8px 2px rgba(255,107,0,0.7)',
        }}
      />
    </>
  );
};

export default CustomCursor;
