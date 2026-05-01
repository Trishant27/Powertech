import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroModel3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 7);

    // ── Lights ────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xff6b00, 2.5); // orange key
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x4488ff, 1.0); // cool fill
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, -5, -3);
    scene.add(rimLight);

    // ── Materials ─────────────────────────────────────────────
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x8899aa,
      metalness: 0.9,
      roughness: 0.25,
    });
    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0xff3300,
      emissiveIntensity: 0.15,
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x222831,
      metalness: 0.8,
      roughness: 0.4,
    });

    // ── Helper: build a gear ──────────────────────────────────
    const buildGear = (teeth, outerR, innerR, toothH, thickness, mat) => {
      const shape = new THREE.Shape();
      const angleStep = (Math.PI * 2) / teeth;
      for (let i = 0; i < teeth; i++) {
        const a0 = i * angleStep - angleStep * 0.3;
        const a1 = i * angleStep + angleStep * 0.3;
        const a2 = i * angleStep + angleStep * 0.5;
        const a3 = (i + 1) * angleStep - angleStep * 0.5;
        if (i === 0) shape.moveTo(Math.cos(a0) * innerR, Math.sin(a0) * innerR);
        shape.lineTo(Math.cos(a0) * innerR, Math.sin(a0) * innerR);
        shape.lineTo(Math.cos(a1) * (innerR + toothH), Math.sin(a1) * (innerR + toothH));
        shape.lineTo(Math.cos(a2) * (innerR + toothH), Math.sin(a2) * (innerR + toothH));
        shape.lineTo(Math.cos(a3) * innerR, Math.sin(a3) * innerR);
      }
      shape.closePath();
      // hole
      const hole = new THREE.Path();
      hole.absarc(0, 0, outerR * 0.28, 0, Math.PI * 2, true);
      shape.holes.push(hole);

      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: thickness,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.03,
        bevelSegments: 2,
      });
      geo.center();
      return new THREE.Mesh(geo, mat);
    };

    // ── Helper: build a hex bolt ──────────────────────────────
    const buildBolt = (mat) => {
      const group = new THREE.Group();
      // hex head
      const hexShape = new THREE.Shape();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        i === 0
          ? hexShape.moveTo(Math.cos(a) * 0.22, Math.sin(a) * 0.22)
          : hexShape.lineTo(Math.cos(a) * 0.22, Math.sin(a) * 0.22);
      }
      hexShape.closePath();
      const headGeo = new THREE.ExtrudeGeometry(hexShape, { depth: 0.12, bevelEnabled: false });
      headGeo.center();
      const head = new THREE.Mesh(headGeo, mat);
      group.add(head);
      // shaft
      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 0.7, 12),
        mat
      );
      shaft.position.y = -0.4;
      group.add(shaft);
      return group;
    };

    // ── Helper: build a wrench ────────────────────────────────
    const buildWrench = (mat) => {
      const group = new THREE.Group();
      // handle
      const handle = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 1.4, 0.1),
        mat
      );
      group.add(handle);
      // head ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.28, 0.09, 8, 20),
        mat
      );
      ring.position.y = 0.85;
      group.add(ring);
      // jaw opening
      const jaw1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.12), mat);
      jaw1.position.set(-0.2, -0.75, 0);
      group.add(jaw1);
      const jaw2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.12), mat);
      jaw2.position.set(0.2, -0.75, 0);
      group.add(jaw2);
      return group;
    };

    // ── Assemble scene ────────────────────────────────────────
    const root = new THREE.Group();
    scene.add(root);

    // Large gear — centre
    const gear1 = buildGear(16, 1.6, 1.3, 0.28, 0.22, orangeMat);
    gear1.position.set(0, 0, 0);
    root.add(gear1);

    // Medium gear — top right
    const gear2 = buildGear(10, 1.0, 0.82, 0.22, 0.18, metalMat);
    gear2.position.set(1.85, 1.1, -0.3);
    root.add(gear2);

    // Small gear — bottom left
    const gear3 = buildGear(7, 0.65, 0.52, 0.16, 0.15, darkMat);
    gear3.position.set(-1.6, -0.9, 0.1);
    root.add(gear3);

    // Wrench — right side
    const wrench = buildWrench(metalMat);
    wrench.position.set(2.2, -0.6, 0.2);
    wrench.rotation.z = -0.5;
    root.add(wrench);

    // Bolt — scattered
    const bolt1 = buildBolt(metalMat);
    bolt1.position.set(-0.8, 1.6, 0.3);
    bolt1.rotation.z = 0.4;
    root.add(bolt1);

    const bolt2 = buildBolt(orangeMat);
    bolt2.position.set(1.0, -1.8, 0.2);
    bolt2.rotation.z = -0.3;
    root.add(bolt2);

    // Centre axle pin
    const axle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.5, 16),
      orangeMat
    );
    axle.rotation.x = Math.PI / 2;
    root.add(axle);

    // ── Mouse tracking ────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      // normalise to -1 … +1
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    // listen on the whole window so it still tracks when cursor is over text
    window.addEventListener('mousemove', onMouseMove);

    // ── Animation loop ────────────────────────────────────────
    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth follow
      target.x += (mouse.x - target.x) * 0.06;
      target.y += (mouse.y - target.y) * 0.06;

      // Tilt root toward cursor
      root.rotation.y = target.x * 0.5;
      root.rotation.x = -target.y * 0.35;

      // Slow idle float
      root.position.y = Math.sin(t * 0.6) * 0.08;

      // Gear rotations (meshed speeds)
      gear1.rotation.z = t * 0.4;
      gear2.rotation.z = -t * 0.64; // 16/10 ratio
      gear3.rotation.z = t * 0.914; // 16/7 ratio

      // Wrench slight wobble
      wrench.rotation.z = -0.5 + Math.sin(t * 0.8) * 0.06;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize handler ────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};

export default HeroModel3D;
