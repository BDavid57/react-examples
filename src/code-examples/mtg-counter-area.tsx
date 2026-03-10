import { MtgCounter } from "./components";

export const MtgCounterArea = () => {

  return (
    <div style={{ margin: '25px' }}>
      <div style={{ display: 'flex'}}>
        <MtgCounter />
        <MtgCounter />
      </div>

      <div style={{ display: 'flex'}}>
        <MtgCounter />
        <MtgCounter />
      </div>
    </div>
  );
}
