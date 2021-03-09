import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "./Link";
import Avatar from "./Avatar";


const UserName = ({ name, link, src }) => {

  return (
    <Wrapper>
      <Avatar src={src} alt={name} />
      <Name text={name} link={link} data-testid="username" />
    </Wrapper>
  );

};

// prop types
UserName.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
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
