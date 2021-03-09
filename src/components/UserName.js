import styled from "styled-components";
import Link from "./Link";
import Avatar from "./Avatar";

const UserName = ({ name, link, src }) => {

  return (
    <Wrapper>
      <Avatar src={src} alt={name} />
      <Link text={name} link={link} data-testid="username"/>
    </Wrapper>
  );

};

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;


export default UserName;
