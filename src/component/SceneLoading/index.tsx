import Typography from '../Typography';

interface SceneLoadinProps {
  rate: number | undefined;
}

const SceneLoading = ({ rate }: SceneLoadinProps) => {
  return (
    <div>
      <label htmlFor="scene">
        <Typography p2>Loading Scene ...</Typography>
      </label>
      <progress id="scene" max="100" value={rate} />
    </div>
  );
};

export default SceneLoading;
