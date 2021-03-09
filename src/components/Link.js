import OctIcon from "react-octicon";
import styled from "styled-components";

const Link = ({ icon, text, link, className }) => {
  return <LinkTag href={link} className={className}>
    {icon && <OctIcon name={icon} />} {text}
  </LinkTag>;
};

export const LinkTag = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #0366d6;
  font-weight: 600;
  padding : 20px
`;



export default Link;