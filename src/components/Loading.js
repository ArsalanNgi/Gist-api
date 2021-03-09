import styled from "styled-components";

const Loading = ({ text }) => {
  return (
    <Wrapper>
      <h1 data-testid="loading">{text}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;

`;

export default Loading;