import styled from "styled-components";

const ErrorScreen = ({ message }) => {
  return (
    <Wrapper>
      <h1>{message}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  align-items:center;
  justify-content: center;
`;

export default ErrorScreen;