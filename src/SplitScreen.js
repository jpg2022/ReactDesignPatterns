import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({ children, leftweight = 1, righweight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftweight}>{left}</Pane>
      <Pane weight={righweight}>{right}</Pane>
    </Container>
  );
};
