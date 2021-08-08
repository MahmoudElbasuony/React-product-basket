import React from "react";
import { render } from "@testing-library/react";
import Home from "./index";
import { Provider } from "react-redux";
import { createGlobalStore } from "../../redux/store";
import { MemoryRouter as Router } from "react-router-dom";

describe("The home screen", () => {
  let getByText: any;

  beforeEach(() => {
    ({ getByText } = render(
      <Provider store={createGlobalStore()}>
        <Router>
          <Home />
        </Router>
      </Provider>
    ));
  });

  it("is rendered initially with a start button", () => {
    const startButton = getByText(/start/i);

    expect(startButton).toBeInTheDocument();
  });

  it("is rendered initially with a dark mode label", () => {
    const darkModeLabel = getByText(/dark mode/i);

    expect(darkModeLabel).toBeInTheDocument();
  });
});
