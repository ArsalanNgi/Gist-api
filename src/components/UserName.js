import styled from "styled-components";
import Link from "./Link";
import Avatar from "./Avatar";

const UserName = ({ name, link, src }) => {

  return (
    <Wrapper>
      <Avatar src={src} alt={name} />
      <Name text={name} link={link} data-testid="username"/>
    </Wrapper>
  );

};

const Name = styled(Link)`
  font-size: 16px;
  font-weight: 600;

`;
const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;


export default UserName;
