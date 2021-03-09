import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { GistContext } from "./context/GistContext";

describe("App Component", () => {
  it('should be rendered in dom', () => {
    render(<GistContext.Provider value={{
      publicGist: [],
      fetchPublicGist: () => { }
    }}>
      <App />
    </GistContext.Provider>
    );
    const linkElement = screen.getByTestId('app');
    expect(linkElement).toBeInTheDocument();
  });
});
