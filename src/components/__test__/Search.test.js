import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';
import { GistContext } from "../../context/GistContext";

const renderApp = (ui, value) => {
  return render(<GistContext.Provider value={value}>
    {ui}
  </GistContext.Provider>
  );
};
describe("Search Component", () => {

  it('should render a search tag', () => {
    const value = {
      publicGist: [],
      fetchPublicGist: () => { }
    };
    renderApp(<App />, value);
    const searchElement = screen.getByTestId('search-input');
    expect(searchElement).toBeInTheDocument()
  });

});
