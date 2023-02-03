import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./SplitScreen";

const Lefthandcomp = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>left!!{name}</h1>;
};

const Righthandcomp = ({ message }) => {
  return <p style={{ backgroundColor: "red" }}>Right! {message}</p>;
};

function App() {
  return (
    <SplitScreen leftweight={1} righweight={3}>
      <Lefthandcomp name="Shuan" />
      <Righthandcomp message="hello" />
    </SplitScreen>
  );
}

export default App;
