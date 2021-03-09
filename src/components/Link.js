import OctIcon from "react-octicon";
import styled from "styled-components";
import PropTypes from "prop-types";

const Link = ({ icon = null, text, link, className, ...rest }) => {
  return <LinkTag href={link} className={className} {...rest}>
    {icon && <OctIcon name={icon} />} {text}
  </LinkTag>;
};

// prop types
Link.propTypes = {
  icon: PropTypes.node,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export const LinkTag = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #0366d6;
  padding : 20px
`;



export default Link;