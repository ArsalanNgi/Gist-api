import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../../App';
import { gist } from "./mock";
import { GistContext } from "../../context/GistContext";

const renderApp = (ui, value) => {
  return render(<GistContext.Provider value={value}>
    {ui}
  </GistContext.Provider>
  );
};
describe("UserName Component", () => {

  it('should render a username', () => {
    const value = {
      publicGist: gist,
      fetchPublicGist: () => { }
    };
    renderApp(<App />, value);
    const avatarElement = screen.getByTestId('username');
    expect(avatarElement.textContent).toMatch("HugsLibRecordKeeper")
  });
});
