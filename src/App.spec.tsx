import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom";

describe("My Test Suite", () => {
  it("Returns true", () => {
    expect(true).toEqual(true);
  });
});

describe("Rendering", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
