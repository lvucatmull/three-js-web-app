import Typography from 'component/Typography';

const Loading = ({ rate }) => {
  return (
    <div>
      <label for="scene">
        <Typography p2>Loading Scene ...</Typography>
      </label>
      <progress id="scene" max="100" value={rate} />
    </div>
  );
};

export default Loading;
