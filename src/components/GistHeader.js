import React from "react";
import moment from "moment";
import styled from "styled-components";
import PropTypes from "prop-types";

import IconList from "./GistIconSections";
import UserName from "./UserName";

const GistHeader = ({ avatarUrl, name, url, createdAt, updatedAt, iconsList }) => {
  return (
    <Wrapper>
      <GistUserInfoWrapper>
        <UserName src={avatarUrl} name={name} link={url} />
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

// prop types
GistHeader.propTypes = {
  iconsList: PropTypes.array,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
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