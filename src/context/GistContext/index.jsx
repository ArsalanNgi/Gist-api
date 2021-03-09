import React, { useContext, createContext, useState } from "react";
import { getPublicGists, getGistForUser } from "../../services/gistService";
import { DEFAULT_ERROR } from "../../constants";

export const GistContext = createContext(null);

export default function ({ children }) {
  const [loadingPublicGist, setLoadingPublicGist] = useState(false);
  const [publicGist, setPublicGist] = useState([]);

  const [error, setError] = useState('');
  const [loadingUserGist, setLoadingUserGist] = useState(false);

  // fetch public gist
  const fetchPublicGist = async () => {
    setError('');
    setLoadingPublicGist(true);
    try {

      const res = await getPublicGists();
      setPublicGist(res.data);
    } catch (error) {
      setError(error.message || DEFAULT_ERROR);
    } finally {
      setLoadingPublicGist(false);
    }
  };

  //get gist by user on search
  const getGistByUser = async (username) => {

    // fetch public gist if user remove search
    if (typeof username === "string" && username.trim().length === 0) {
      fetchPublicGist();
      return;
    }
    setError('');
    setLoadingUserGist(true);
    try {
      const res = await getGistForUser(username);
      setPublicGist(res.data);
    } catch (error) {
      setError(error.message || DEFAULT_ERROR);
    } finally {
      setLoadingUserGist(false);
    }
  };

  return <GistContext.Provider
    value={{
      fetchPublicGist,
      publicGist,
      getGistByUser,
      loadingPublicGist,
      loadingUserGist,
      error
    }}
  >
    {children}
  </GistContext.Provider>;
}