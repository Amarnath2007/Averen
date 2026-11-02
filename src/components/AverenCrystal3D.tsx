'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const AverenCrystal3D: React.FC<{ mousePos: React.MutableRefObject<{ x: number; y: number }> }> = ({
  mousePos,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const crystalRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const crossbarRef = useRef<THREE.Mesh>(null);
  const innerFacetRef = useRef<THREE.Mesh>(null);

  // Proportional Faceted 3D Geometries matching the Averen "A"
  const { leftGeo, rightGeo, crossGeo, innerGeo } = useMemo(() => {
    // Left Wing (Deep Cobalt / Royal Blue)
    const leftShape = new THREE.Shape();
    leftShape.moveTo(-0.35, 1.9);
    leftShape.lineTo(-2.25, -1.7);
    leftShape.lineTo(-1.25, -1.7);
    leftShape.lineTo(-0.45, -0.15);
    leftShape.lineTo(-0.1, 0.7);
    leftShape.lineTo(0.0, 1.9);
    leftShape.closePath();

    // Right Wing (Vibrant Cyan / Aquamarine)
    const rightShape = new THREE.Shape();
    rightShape.moveTo(0.0, 1.9);
    rightShape.lineTo(0.35, 1.9);
    rightShape.lineTo(2.25, -1.7);
    rightShape.lineTo(1.25, -1.7);
    rightShape.lineTo(0.45, -0.15);
    rightShape.lineTo(0.1, 0.7);
    rightShape.closePath();

    // Angled Crossbar Bridge
    const crossShape = new THREE.Shape();
    crossShape.moveTo(-0.55, -0.15);
    crossShape.lineTo(0.55, -0.15);
    crossShape.lineTo(0.8, -0.85);
    crossShape.lineTo(-0.8, -0.85);
    crossShape.closePath();

    // Inner Inverted Triangular Cutout Facet (creates depth)
    const innerShape = new THREE.Shape();
    innerShape.moveTo(0.0, 1.1);
    innerShape.lineTo(-0.5, -0.1);
    innerShape.lineTo(0.5, -0.1);
    innerShape.closePath();

    const extrudeSettings = {
      depth: 0.55,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 2,
      bevelSize: 0.14,
      bevelThickness: 0.18,
    };

    const lG = new THREE.ExtrudeGeometry(leftShape, extrudeSettings);
    lG.center();

    const rG = new THREE.ExtrudeGeometry(rightShape, extrudeSettings);
    rG.center();

    const cG = new THREE.ExtrudeGeometry(crossShape, {
      ...extrudeSettings,
      depth: 0.45,
      bevelThickness: 0.12,
      bevelSize: 0.1,
    });
    cG.center();

    const iG = new THREE.ExtrudeGeometry(innerShape, {
      depth: 0.25,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.08,
      bevelThickness: 0.1,
    });
    iG.center();

    return { leftGeo: lG, rightGeo: rG, crossGeo: cG, innerGeo: iG };
  }, []);

  // Premium Physical Materials reproducing the glass refraction and color transition
  const materials = useMemo(() => {
    // Left Wing: Deep Sapphire / Cobalt Glass
    const leftMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0252a5'),
      emissive: new THREE.Color('#01255e'),
      emissiveIntensity: 0.35,
      roughness: 0.08,
      metalness: 0.06,
      transmission: 0.88,
      ior: 1.56,
      thickness: 1.4,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#bde0fe'),
      transparent: true,
      opacity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    // Right Wing: Luminous Cyan & Turquoise Crystal
    const rightMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#00b4d8'),
      emissive: new THREE.Color('#0077b6'),
      emissiveIntensity: 0.35,
      roughness: 0.06,
      metalness: 0.04,
      transmission: 0.92,
      ior: 1.54,
      thickness: 1.2,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#e0f2fe'),
      transparent: true,
      opacity: 0.96,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });

    // Center Crossbar Prism
    const crossMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0096c7'),
      emissive: new THREE.Color('#023e8a'),
      emissiveIntensity: 0.4,
      roughness: 0.12,
      metalness: 0.08,
      transmission: 0.84,
      ior: 1.55,
      thickness: 1.3,
      transparent: true,
      opacity: 0.93,
    });

    // Dark Depth Inner Cutout
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#03045e'),
      emissive: new THREE.Color('#021438'),
      emissiveIntensity: 0.3,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.75,
      transparent: true,
      opacity: 0.9,
    });

    // Concrete Plinth Material
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#cfd4da'),
      roughness: 0.85,
      metalness: 0.12,
    });

    // Neon Cyan Emissive Base Strip
    const neonMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#00f0ff'),
    });

    return { leftMat, rightMat, crossMat, innerMat, pedestalMat, neonMat };
  }, []);

  // Responsive Canvas Animation Loop
  useFrame((state, delta) => {
    if (!groupRef.current || !crystalRef.current) return;

    const t = state.clock.getElapsedTime();

    // Gentle breathing hover
    crystalRef.current.position.y = 0.45 + Math.sin(t * 1.4) * 0.05;

    // Smooth cursor parallax with fluid damping
    const targetRotY = mousePos.current.x * 0.24;
    const targetRotX = -mousePos.current.y * 0.14;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, delta * 3.2);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 3.2);

    // Subtle internal refractions
    if (leftLegRef.current && rightLegRef.current) {
      leftLegRef.current.rotation.z = Math.sin(t * 0.9) * 0.008;
      rightLegRef.current.rotation.z = -Math.sin(t * 0.9) * 0.008;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* 3D Averen Crystal Sculpture */}
      <group ref={crystalRef} position={[0, 0.45, 0]} scale={[0.92, 0.92, 0.92]}>
        {/* Left Wing (Deep Blue Facets) */}
        <mesh
          ref={leftLegRef}
          geometry={leftGeo}
          material={materials.leftMat}
          position={[-0.82, 0, 0]}
          castShadow
          receiveShadow
        />

        {/* Right Wing (Radiant Cyan Facets) */}
        <mesh
          ref={rightLegRef}
          geometry={rightGeo}
          material={materials.rightMat}
          position={[0.82, 0, 0]}
          castShadow
          receiveShadow
        />

        {/* Center Crossbar Fold */}
        <mesh
          ref={crossbarRef}
          geometry={crossGeo}
          material={materials.crossMat}
          position={[0, -0.32, 0.06]}
          castShadow
          receiveShadow
        />

        {/* Inner Dark Cutout (Depth Illusion) */}
        <mesh
          ref={innerFacetRef}
          geometry={innerGeo}
          material={materials.innerMat}
          position={[0, 0.35, -0.05]}
        />
      </group>

      {/* Architectural Concrete Pedestal / Plinth */}
      <group position={[0, -1.85, 0]}>
        {/* Main Concrete Plinth */}
        <mesh material={materials.pedestalMat} position={[0, 0, 0]} receiveShadow castShadow>
          <boxGeometry args={[4.8, 0.65, 2.6]} />
        </mesh>

        {/* Luminous Cyan Neon Base Under-Glow Strip */}
        <mesh material={materials.neonMat} position={[0, -0.33, 0]}>
          <boxGeometry args={[4.6, 0.03, 2.4]} />
        </mesh>
      </group>
    </group>
  );
};

export default AverenCrystal3D;
