import styled from "styled-components";
import PropTypes from "prop-types";

const Avatar = ({ src, alt = "" }) => {
  return <AvatarWrapper>
    <Image src={src} alt={alt} data-testid="avatar" />
  </AvatarWrapper>;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;

`;

export default Avatar;


