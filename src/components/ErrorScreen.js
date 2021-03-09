import styled from "styled-components";
import PropTypes from "prop-types";

const ErrorScreen = ({ message }) => {
  return (
    <Wrapper>
      <h1 data-testid="error-message">{message}</h1>
    </Wrapper>
  );
};

ErrorScreen.propTypes = {
  message: PropTypes.string.isRequired
}

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  align-items:center;
  justify-content: center;
`;

export default ErrorScreen;