import { useLayoutEffect, useRef, useState } from "react";

const WebGLContext = ({ width, height, ...props }) => {
  const canvasRef = useRef(null);

  const [gl, setGL] = useState();

  // const setCanvasRef = (canvasRef) => {
  //   this.ref = canvasRef;
  // }

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    setGL(
      canvas?.getContext?.("webgl2") ?? undefined
    );
  }, []);

  const vertexShaderSource = `#version 300 es
  #pragma vscode_glsllint_stage: vert

  vec4 in aPointSize;

  void main()
  {
      gl_PointSize = aPointSize;
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  }`;

  const fragmentShaderSource = `#version 300 es
  #pragma vscode_glsllint_stage: frag

  precision mediump float;

  out vec4 fragColor;

  void main()
  {
      fragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }`;

  const program = gl.createProgram();
  
  // const gl = canvas.getContext('webgl2');\
  function initGL() {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);
    gl.attachShader(program, vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log(gl.getShaderInfoLog(vertexShader));
      console.log(gl.getShaderInfoLog(fragmentShader));
    }

    gl.useProgram(program);
  }

  let time = 0;
  function anime() {
    time+= 0.01;

    const positionLoc = gl.getAttribLocation(program, 'aPosition');
    gl.vertexAttrib4fv(positionLoc, {});

    gl.drawArrays(gl.POINTS, 0, 1);

    window.requestAnimationFrame(anime);
  }

  initGL();
  window.requestAnimationFrame(anime);

  return (
    <canvas
      ref={canvasRef}
      width={540}
      height={480}
      style={{
        ...props?.style,
        border: "1px solid green"
      }}
    ></canvas>
  );
};

export default WebGLContext;
