import styled from "styled-components";

const Avatar = ({ src, alt }) => {
  return <AvatarWrapper>
    <Image src={src} alt={alt} data-testid="avatar"/>
  </AvatarWrapper>;
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


