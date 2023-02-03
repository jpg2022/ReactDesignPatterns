import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./SplitScreen";

const lefthandcomp = () => {
  return <h1 style={{ backgroundColor: "green" }}>left!!</h1>;
};

const righthandcomp = () => {
  return <p style={{ backgroundColor: "red" }}>Right!</p>;
};

function App() {
  return <SplitScreen left={lefthandcomp} right={righthandcomp} />;
}

export default App;
