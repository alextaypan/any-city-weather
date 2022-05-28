import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{ margin: "0 auto" }}>
      <RotatingLines width="100" strokeColor="#6495ED" strokeWidth="1" />
    </div>
  );
}

export default Loader;
