import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SponzaScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 씬, 카메라, 렌더러 생성
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // 기본 큐브 추가
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Coordinate
    const dirX = new THREE.Vector3(1, 0, 0);
    const dirY = new THREE.Vector3(0, 1, 0);
    const dirZ = new THREE.Vector3(0, 0, -1);

    const origin = new THREE.Vector3(0, 0, 0);
    const length = 10;
    const Red = 0xff0000;
    const Green = 0x00ff00;
    const Blue = 0x0000ff;

    const arrowX = new THREE.ArrowHelper(dirX, origin, length, Red);
    const arrowY = new THREE.ArrowHelper(dirY, origin, length, Green);
    const arrowZ = new THREE.ArrowHelper(dirZ, origin, length, Blue);

    scene.add(arrowX);
    scene.add(arrowY);
    scene.add(arrowZ);

    camera.position.z = 5;

    // 애니메이션 루프
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      //   cube.rotation.x += mouseX * 0.1;
      //   cube.rotation.y += mouseY * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트 언마운트 시 정리
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(cube);
      cubeGeometry.dispose();
      cubeMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "800px", height: "600px" }} />;
};

export default SponzaScene;
