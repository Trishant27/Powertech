import React, { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

/**
 * ThreeBackground — immersive Three.js canvas background
 *
 * Renders a full-size canvas with:
 *  - Animated wireframe grid floor receding into the distance
 *  - Floating wireframe geometric shapes (cubes, cylinders, octahedra)
 *  - Drifting orange ember particles
 *  - Orange point lights + ambient lighting
 *
 * @param {Object}  props
 * @param {string}  props.variant  'hero' | 'about' | 'minimal' (default 'hero')
 * @param {string}  props.className  additional CSS classes
 */
const ThreeBackground = ({ variant = 'hero', className = '' }) => {
  const mountRef = useRef(null);
  const animRef = useRef(null);

  // Colour palette
  const palette = useMemo(
    () => ({
      bg: new THREE.Color(0x081425),
      grid: new THREE.Color(0x1a2a40),
      orange: new THREE.Color(0xff6b00),
      cyan: new THREE.Color(0x3a7bff),
      white: new THREE.Color(0xffffff),
    }),
    []
  );

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // ─── RENDERER ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ─── SCENE & CAMERA ────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x081425, 0.025);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 200);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 0, -5);

    // ─── LIGHTS ────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0x1a2a40, 0.4);
    scene.add(ambient);

    const orangeLight = new THREE.PointLight(0xff6b00, 2, 40);
    orangeLight.position.set(-5, 5, 3);
    scene.add(orangeLight);

    const blueLight = new THREE.PointLight(0x3a7bff, 1.2, 40);
    blueLight.position.set(5, 3, -5);
    scene.add(blueLight);

    // ─── WIREFRAME GRID FLOOR ──────────────────────────────────
    const gridGroup = new THREE.Group();
    const gridSize = variant === 'minimal' ? 30 : 60;
    const gridDiv = variant === 'minimal' ? 20 : 40;
    const gridHelper = new THREE.GridHelper(gridSize, gridDiv, 0x1a3a55, 0x0d1f33);
    gridHelper.position.y = -2;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.5;
    gridGroup.add(gridHelper);
    scene.add(gridGroup);

    // ─── FLOATING WIREFRAME SHAPES ─────────────────────────────
    const shapes = [];
    const shapeCount = variant === 'hero' ? 15 : variant === 'about' ? 10 : 6;
    const geos = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.OctahedronGeometry(0.7),
      new THREE.CylinderGeometry(0.4, 0.4, 1.2, 8),
      new THREE.TorusGeometry(0.5, 0.15, 8, 16),
      new THREE.IcosahedronGeometry(0.6),
    ];

    for (let i = 0; i < shapeCount; i++) {
      const geo = geos[i % geos.length];
      const mat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? palette.orange : palette.grid,
        wireframe: true,
        transparent: true,
        opacity: 0.25 + Math.random() * 0.25,
      });
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.3) * 8,
        (Math.random() - 0.5) * 30 - 5
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const sc = 0.5 + Math.random() * 1.2;
      mesh.scale.set(sc, sc, sc);
      mesh.userData = {
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.005,
        },
        floatSpeed: 0.3 + Math.random() * 0.7,
        floatAmp: 0.3 + Math.random() * 0.6,
        baseY: mesh.position.y,
      };

      scene.add(mesh);
      shapes.push(mesh);
    }

    // ─── PARTICLES (ORANGE EMBERS) ─────────────────────────────
    const particleCount = variant === 'hero' ? 200 : 100;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pSizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 40;
      pPositions[i * 3 + 1] = (Math.random() - 0.3) * 15;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5;
      pSizes[i] = 1 + Math.random() * 3;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute('size', new THREE.BufferAttribute(pSizes, 1));

    const pMat = new THREE.PointsMaterial({
      color: 0xff6b00,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ─── MOUSE TRACKING ────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ─── ANIMATION LOOP ───────────────────────────────────────
    const clock = new THREE.Clock();
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Rotate shapes
      shapes.forEach((s) => {
        s.rotation.x += s.userData.rotSpeed.x;
        s.rotation.y += s.userData.rotSpeed.y;
        s.rotation.z += s.userData.rotSpeed.z;
        s.position.y =
          s.userData.baseY +
          Math.sin(t * s.userData.floatSpeed) * s.userData.floatAmp;
      });

      // Drift particles upward slowly
      const pos = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += 0.003;
        if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -3;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Subtle camera sway from mouse
      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (3 - mouse.y * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, -5);

      // Pulse orange light
      orangeLight.intensity = 2 + Math.sin(t * 0.8) * 0.5;

      // Rotate grid slowly
      gridGroup.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };
    animate();

    // ─── RESIZE ────────────────────────────────────────────────
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ─── CLEANUP ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geos.forEach((g) => g.dispose());
      pGeo.dispose();
      pMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant, palette]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeBackground;
