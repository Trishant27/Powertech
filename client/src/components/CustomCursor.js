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
      {/* Ping ring 1 */}
      <span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '40px',
        height: '40px',
        marginLeft: '-20px',
        marginTop: '-20px',
        borderRadius: '50%',
        border: '2px solid rgba(255, 107, 0, 0.8)',
        animation: 'radarRing 1.8s ease-out infinite',
      }} />

      {/* Ping ring 2 — delayed */}
      <span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '40px',
        height: '40px',
        marginLeft: '-20px',
        marginTop: '-20px',
        borderRadius: '50%',
        border: '2px solid rgba(255, 107, 0, 0.5)',
        animation: 'radarRing 1.8s ease-out infinite 0.6s',
      }} />

      {/* Ping ring 3 — more delayed */}
      <span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '40px',
        height: '40px',
        marginLeft: '-20px',
        marginTop: '-20px',
        borderRadius: '50%',
        border: '2px solid rgba(255, 107, 0, 0.3)',
        animation: 'radarRing 1.8s ease-out infinite 1.2s',
      }} />

      {/* Core dot */}
      <span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '10px',
        height: '10px',
        marginLeft: '-5px',
        marginTop: '-5px',
        borderRadius: '50%',
        backgroundColor: '#FF6B00',
        boxShadow: '0 0 8px 3px rgba(255,107,0,0.6)',
      }} />
    </div>
  );
};

export default CustomCursor;
