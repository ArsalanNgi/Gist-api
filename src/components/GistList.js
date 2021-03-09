import React, { useEffect, useState } from 'react';

import useGist from "../context/GistContext/useGistContext";
import Gist from "./Gist";
import NoResult from "./NoResult";
import ErrorScreen from "./ErrorScreen";

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
    return (<h1 data-testid="loading">Loading...</h1>);
  }

  // show error screen on failed
  if(error) {
    return <ErrorScreen message={error} />
  }

  // show no result message if no result found
  if (!publicGist || publicGist.length === 0) {
    return <NoResult />;
  }


  // show all public gist + searched gist by user
  return (<div data-testid="gist-list">
    {publicGist.map((gist) => <Gist gist={gist} key={gist.id} />)}
  </div>);
};

export default GistList;
