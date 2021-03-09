import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "./Link";

const GistIconList = ({ list }) => {
  return <Wrapper>
    {list.map((item, index) => <Link {...item} key={index} />)}
  </Wrapper>;
};


// prop types
GistIconList.propTypes = {
  list: PropTypes.array.isRequired
};


const Wrapper = styled.div`
  display: flex;
`;

export default GistIconList;