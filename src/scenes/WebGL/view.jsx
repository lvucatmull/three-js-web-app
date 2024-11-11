

const View = ({
    setCanvasRef,
    width,
    height,
    ...props
}) => {
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
}

export default View;