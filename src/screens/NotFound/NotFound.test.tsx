import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createGlobalStore } from "../../redux/store";
import { MemoryRouter as Router } from "react-router-dom";
import NotFound from "./index";
import userEvent from "@testing-library/user-event";

describe("The not found screen", () => {
  let getByText: any;

  beforeEach(() => {
    ({ getByText } = render(
      <Provider store={createGlobalStore()}>
        <Router>
          <NotFound />
        </Router>
      </Provider>
    ));
  });

  it("is rendered initially with [Page Not Found] text", () => {
    const notFoundText = getByText(/Page Not Found/i);

    expect(notFoundText).toBeInTheDocument();
  });

  it("has back btn", () => {
    const backBtn = getByText(/<< Back/i);

    expect(backBtn).toBeInTheDocument();
  });

});
