import styled from "styled-components";
import PropTypes from "prop-types";

const Loading = ({ text }) => {
  return (
    <Wrapper>
      <h1 data-testid="loading">{text}</h1>
    </Wrapper>
  );
};

// prop types
Loading.propTypes = {
  text: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;

`;

export default Loading;