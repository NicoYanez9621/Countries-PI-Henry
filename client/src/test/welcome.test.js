import React from "react";
import Nav from "../component/Nav/Nav";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import { BrowserRouter } from "react-router-dom";

describe("component <Nav/>", () => {
  const component = (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </Provider>
  );
  it("Link debe tener el texto Countries", () => {
    render(component);
    const linkElement = screen.getByText(/Countries/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Link debe tener el texto Activities", () => {
    render(component);
    const linkElement = screen.getByText(/Activities/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Link debe tener el texto New Activity", () => {
    render(component);
    const linkElement = screen.getByText(/New Activity/i);
    expect(linkElement).toBeInTheDocument();
  });
});
