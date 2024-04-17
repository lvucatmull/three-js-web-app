import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import Typography from 'component/Typography';
import Description from 'component/Description';

const SponzaScene = () => {
  const mountRef = useRef(null);

  const BillBoardDescription = useCallback(() => {
    const originX = mountRef.current?.getBoundingClientRect().left;
    const originY = mountRef.current?.getBoundingClientRect().top;

    console.log('[Description] originX : ', originX);
    console.log('[Description] originY : ', originY);

    return (
      <Description originX={originX} originY={originY}>
        <p style={{ color: 'lightgreen', fontWeight: 800 }}>Sponza</p>
      </Description>
    );
  }, [mountRef]);

  useEffect(() => {
    const scene = new THREE.Scene();

    var rect = mountRef.current.getBoundingClientRect();

    console.log('[bounding rect] originX : ', rect.left);
    console.log('[bounding rect] originY : ', rect.top);
    console.log('[bounding rect] right : ', rect.right);
    console.log('[bounding rect] bottom : ', rect.bottom);

    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.25,
      20,
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    );
    mountRef.current.appendChild(renderer.domElement);

    var sponza_object = undefined;
    var mtlLoader = new MTLLoader();
    // THREE.DefaultLoadingManager.onStart = function (
    //   url,
    //   itemsLoaded,
    //   itemsTotal,
    // ) {
    //   console.log(
    //     'Started loading file: ' +
    //       url +
    //       '.\nLoaded ' +
    //       itemsLoaded +
    //       ' of ' +
    //       itemsTotal +
    //       ' files.',
    //   );
    // };

    // THREE.DefaultLoadingManager.onLoad = function () {
    //   console.log('Loading Complete!');
    // };

    // THREE.DefaultLoadingManager.onProgress = function (
    //   url,
    //   itemsLoaded,
    //   itemsTotal,
    // ) {
    //   console.log(
    //     'Loading file: ' +
    //       url +
    //       '.\nLoaded ' +
    //       itemsLoaded +
    //       ' of ' +
    //       itemsTotal +
    //       ' files.',
    //   );
    // };

    // THREE.DefaultLoadingManager.onError = function (url) {
    //   console.log('There was an error loading ' + url);
    // };
    // mtlLoader.load('OBJ/sponza/sponza.mtl', function (materials) {
    //   console.log('sponza mtl loaded');
    //   materials.preload();
    //   var objLoader = new OBJLoader();
    //   objLoader.setMaterials(materials);
    //   objLoader.load('OBJ/sponza/sponza.obj', function (object) {
    //     console.log('sponza obj loaded');
    //     sponza_object = object;
    //     scene.add(sponza_object);
    //   });
    // });

    const loader = new GLTFLoader();

    loader.load(
      './sponza.glb',
      function (gltf) {
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      },
    );

    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // White directional light at half intensity shining from the top.
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // 애니메이션 루프
    const animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트 언마운트 시 정리
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(sponza_object);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '800px', height: '600px' }}>
      <BillBoardDescription />
    </div>
  );
};

export default SponzaScene;
