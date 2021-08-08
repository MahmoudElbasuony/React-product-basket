import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Provider } from "react-redux";
import { createGlobalStore } from "./redux/store";
import { MemoryRouter as Router, Route } from "react-router-dom";

let testHistory: any = null,
  testLocation: any = null;
const renderWithRouterAndStore = (ui: any, { route = "/" } = {}) => {
  return render(
    <Provider store={createGlobalStore()}>
      <Router initialEntries={[route]}>
        {ui}
        <Route
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </Router>
    </Provider>
  );
};

describe("app navigation", () => {
  it("should render at the beginning home when the path is /", () => {
    renderWithRouterAndStore(<App />);
    expect(screen.getByText(/Start/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
  });

  it("should go to /products after clicking start button", () => {
    renderWithRouterAndStore(<App />);
    expect(testLocation.pathname).toEqual("/");
    userEvent.click(screen.getByText(/Start/i));
    expect(testLocation.pathname).toEqual("/products");
  });

  it("should show loader when click on start button", async () => {
    renderWithRouterAndStore(<App />);

    let loader = screen.queryByTestId(/loader/i);
    expect(loader).not.toBeInTheDocument();

    userEvent.click(screen.getByText(/Start/i));

    loader = await screen.findByTestId(/loader/i);
    expect(loader).toBeInTheDocument();
  });

  it("should show products page after clicking on start button", async () => {
    renderWithRouterAndStore(<App />);

    let productsLabel = screen.queryByText(/Products/i);
    expect(productsLabel).not.toBeInTheDocument();

    userEvent.click(screen.getByText(/Start/i));

    productsLabel = await screen.findByText(/Products/i);
    expect(productsLabel).toBeInTheDocument();
  });

  it("should render not found screen with invalid path", async () => {
    renderWithRouterAndStore(<App />, { route: "/ccc" });

    let notFoundText = await screen.findByText(/Page Not Found/i);
    expect(notFoundText).toBeInTheDocument();
  });
});
