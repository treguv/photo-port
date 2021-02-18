import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "../../Nav";

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  it("renders", () => {
    render(<Nav />);
  });
  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment).toMatchSnapshot();
  });
});

//test if emote is visible
describe("emoji is visible", () => {
  it("inserts emoji into h2", () => {
    //arrange
    const { getByLabelText } = render(<Nav />);
    //assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
