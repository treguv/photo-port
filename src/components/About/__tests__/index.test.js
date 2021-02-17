import React from "react"; //we need react to enable the componets to work
import { render, cleanup } from "@testing-library/react";
//render allows us to print to simulated dom and cleanup lets us remove

import "@testing-library/jest-dom/extend-expect";
import About from "../../About";
afterEach(cleanup); //clear things after each test

describe("about componenet", () => {
  //describe, tests
  //render about test
  //first test
  it("renders", () => {
    //first argyment is string, then test
    render(<About />); //render the componenr
  });

  //second test
  it("matches snapshot DOM node structure", () => {
    //render about
    const { asFragment } = render(<About></About>);
    expect(asFragment()).toMatchSnapshot();
  });
});
