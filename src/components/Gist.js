import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FileList from "./FileList";
import GistHeader from "./GistHeader";

const Gist = ({ gist = {} }) => {
  const { forks_url, comments_url, owner, created_at, updated_at, description, files } = gist;
  const { avatar_url, login, html_url } = owner;
  const fileCount = Object.keys(files).length;
  const iconsList = [
    {
      text: `${fileCount} Files`,
      icon: "code",
      link: ''
    },
    {
      text: "Forks",
      icon: "git-merge",
      link: forks_url

    },
    {
      text: "Comments",
      icon: "comment",
      link: comments_url

    },
    {
      text: "Star",
      icon: "star",
      link: ''

    },

  ];
  return (
    <Wrapper data-testid="gist">
      <GistHeader
        avatarUrl={avatar_url}
        name={login}
        url={html_url}
        createdAt={created_at}
        updatedAt={updated_at}
        iconsList={iconsList}
      />
      <GistBody>
        <GistDescription>{description}</GistDescription>
        <FileList files={files} />
      </GistBody>
    </Wrapper>
  );
};


// prop types
Gist.propTypes = {
  gist: PropTypes.object,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border-bottom: 1px solid #d5d5d5;
`;
const GistDescription = styled.div`
  font-size: 18px;
  font-weight: 600;
`;



const GistBody = styled.div`
  display: flex;
  flex-direction: column;

`;

export default Gist;
