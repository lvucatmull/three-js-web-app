import React from "react";

const WebGLContext = ({ width, height, ...props }) => {
  const canvasRef = useRef(null);

  const [gl, setGL] = useState();

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
    <canvas
      ref={canvasRef}
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
