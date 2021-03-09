import styled from "styled-components";
import Link from "./Link";

const GistIconList = ({ list }) => {
  return <Wrapper>
    {list.map((item, index) => <Link {...item} key={index} />)}
  </Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
`;

export default GistIconList;