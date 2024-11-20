import Description from 'component/Description';
import Loading from 'component/Loading';
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const SponzaScene = () => {
  const [rate, setRate] = useState('0');
  const [loadedState, setLoadedState] = useState(false);

  const mountRef = useRef(null);

  const BillBoardDescription = useCallback(() => {
    // const originX = mountRef.current?.getBoundingClientRect()?.left;
    // const originY = mountRef.current?.getBoundingClientRect()?.top;
    const originX = 0;
    const originY = 0;

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

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    );
    mountRef.current.appendChild(renderer.domElement);

    var sponza_object = undefined;
    THREE.DefaultLoadingManager.onStart = function (
      url,
      itemsLoaded,
      itemsTotal,
    ) {
      console.log(
        'Started loading file: ' +
          url +
          '.\nLoaded ' +
          itemsLoaded +
          ' of ' +
          itemsTotal +
          ' files.',
      );
    };

    THREE.DefaultLoadingManager.onLoad = function () {
      console.log('Loading Complete!');
      setLoadedState(true);
    };

    THREE.DefaultLoadingManager.onProgress = function (
      url,
      itemsLoaded,
      itemsTotal,
    ) {
      console.log(
        'Loading file: ' +
          url +
          '.\nLoaded ' +
          itemsLoaded +
          ' of ' +
          itemsTotal +
          ' files.',
      );
    };

    THREE.DefaultLoadingManager.onError = function (url) {
      console.log('There was an error loading ' + url);
    };
    // var mtlLoader = new MTLLoader();
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

    // White directional light at half intensity shining from the top.
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xff0000, 0.7);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(directionalLight);
    scene.add(ambientLight);

    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.25,
      20,
    );

    // 애니메이션 루프
    const animate = function () {
      
      renderer.render(scene, camera);

      window.requestAnimationFrame(animate)
    };

    window.requestAnimationFrame(animate);

    // 컴포넌트 언마운트 시 정리
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(sponza_object);
    };
  }, []);

  return (
      <div ref={mountRef} style={{ width: '800px', height: '600px' }}>
        {loadedState ? <BillBoardDescription /> : <Loading />}
      </div>
  );
};

export default SponzaScene;
