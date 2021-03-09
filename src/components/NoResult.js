import styled from "styled-components";
import OctIcon from "react-octicon";

const NoResult = () => {
  return (
    <Wrapper>
      <SearchIcon name="search"/>
      <h1>No Result Found.</h1>
    </Wrapper>
  );
}

const SearchIcon = styled(OctIcon)`
  font-size: 50px;
  margin-right: 20px;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  align-items:center;
  justify-content: center;
`;

export default NoResult;