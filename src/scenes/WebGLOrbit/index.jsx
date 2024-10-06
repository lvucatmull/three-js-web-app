import React from "react";

const WebGLContext = ({ width, height, ...props }) => {
  const canvasRef = useRef(null);

  const [gl, setGL] = useState();

  const setCanvasRef = (canvasRef) => {
    this.ref = canvasRef;
  }

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current;
    setGL(
      canvas?.getContext?.("webgl2", {
        ...DEFAULT_ATTRIBUTES,
        ...webglAttributes,
      }) ?? undefined
    );
  }, []);

  const vertexShader = createShader(vertex, gl.VERTEX_SHADER);
  const fragmentShader = createShader(fragment, gl.FRAGMENT_SHADER);
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.detachShader(program, vertexShader);
  gl.detachShader(program, fragmentShader);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  return (
    // <View setCanvasRef={setCanvasRef} width height props />
    <canvas
      ref={setCanvasRef}
      width={width}
      height={height}
      style={{
        ...props?.style,
        width: "100%",
        height: "100%",
      }}
    ></canvas>
  );
};

export default WebGLContext;
