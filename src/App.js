import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldShowModal, setshouldShowModal] = useState(false);
  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          setshouldShowModal(false);
        }}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setshouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;
