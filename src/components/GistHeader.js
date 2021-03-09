import React from "react";
import styled from "styled-components";
import UserName from "./UserName";

const GistHeader = ({ avatarUrl, login, url, createdAt, updatedAt, iconsList }) => {
  return (
    <Wrapper>
      <GistUserInfoWrapper>
        <UserName src={avatarUrl} name={login} link={url} />
        <DateWrapper>
          <GistDate>
            Created at: {moment(createdAt).format("MM/DD/YYYY")}
          </GistDate>
          <GistDate>
            Updated at: {moment(updatedAt).format("MM/DD/YYYY")}
          </GistDate>
        </DateWrapper>
      </GistUserInfoWrapper>
      <IconList list={iconsList} />
    </Wrapper>
  );
};



const GistUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DateWrapper = styled.div`
  display: flex;
`;

const GistDate = styled.div`
  padding: 10px;
`;


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export default GistHeader;