import React, { useEffect } from 'react';
import styled from "styled-components";

import useGist from "../context/GistContext/useGistContext";
import Gist from "./Gist";
import NoResult from "./NoResult";
import ErrorScreen from "./ErrorScreen";
import Loading from "./Loading";

const GistList = () => {

  const {
    fetchPublicGist,
    publicGist,
    loadingPublicGist,
    error,
  } = useGist();

  useEffect(() => {
    // fetch publis gist on initial load
    fetchPublicGist();
  }, []);


  // show loading state
  if (loadingPublicGist) {
    return <Loading text="Loading..." />;
  }

  // show error screen on failed
  if (error) {
    return <ErrorScreen message={error} />;
  }

  // show no result message if no result found
  if (!publicGist || publicGist.length === 0) {
    return <NoResult />;
  }


  // show all public gist + searched gist by user
  return (<Wrapper data-testid="gist-list">
    {publicGist.map((gist) => <Gist gist={gist} key={gist.id} />)}
  </Wrapper>);
};

const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;

`;

export default GistList;
