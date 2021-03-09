import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';
import { GistContext } from "../../context/GistContext";
import { gist } from "./mock";

const renderApp = (ui, value) => {
  return render(<GistContext.Provider value={value}>
    {ui}
  </GistContext.Provider>
  );
};
describe("Gist Component", () => {

  it('should be No Result', () => {
    const value = {
      publicGist: [],
      fetchPublicGist: () => { },
      getGistByUser: () => { }
    };
    renderApp(<App />, value);
    const notResultElement = screen.getByTestId('no-result');
    expect(notResultElement.textContent).toMatch("No Result Found.");
  });

  it('should be Loading Gist', () => {
    const value = {
      publicGist: [],
      loadingPublicGist: true,
      fetchPublicGist: () => { },
      getGistByUser: ( ) => {}
    };
    renderApp(<App />, value);
    const loadingElement = screen.getByTestId('loading');
    expect(loadingElement.textContent).toMatch("Loading...");
  });

  it('should be show Error Screen', () => {
    const value = {
      publicGist: [],
      error: "Error",
      loadingPublicGist: false,
      fetchPublicGist: () => { },
      getGistByUser: () => { }
    };
    renderApp(<App />, value);

    const errorElement = screen.getByTestId('error-message');
    expect(errorElement.textContent).toMatch("Error");
  });

  it('should be show render gist', () => {
    const value = {
      publicGist: gist,
      error: "",
      loadingPublicGist: false,
      fetchPublicGist: () => { },
      getGistByUser: () => { }
    };
    renderApp(<App />, value);

    const allGist = screen.getAllByTestId("gist");
    expect(allGist.length).toBe(1);
  });



});
