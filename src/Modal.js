import { usedState, useState } from "react";
import styled from "styled-components";

const Modalbackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modalbody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export const Modal = ({ children }) => {
  const [shouldShow, setShouldshow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldshow(true)}>Show Modal</button>
      {shouldShow && (
        <Modalbackground onClick={() => setShouldshow(false)}>
          <button onClick={() => setShouldshow(false)}>X</button>
          <Modalbody onClick={(e) => e.stopPropagation()}>{children}</Modalbody>
        </Modalbackground>
      )}
    </>
  );
};
