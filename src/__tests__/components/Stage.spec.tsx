import { Stage } from "../../components/Stage";
import React from "react";
import ReactDOM from "react-dom";
import { Town, Citizen } from "../../domain";

describe("Correct Town", () => {
  it("Created Components Correctly", () => {
    const citizen1: Citizen = {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: ["Metalworker", "Woodcarver", "Stonecarver", " Tinker", "Tailor", "Potter"],
    };
    const citizen2: Citizen = {
      id: 1,
      name: "Fizkin Voidbuster",
      thumbnail: "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
      age: 288,
      weight: 35.279167,
      height: 110.43628,
      hair_color: "Green",
      professions: ["Brewer", "Medic", "Prospector", "Gemcutter", "Mason", "Tailor"],
    };
    const town: Town = { name: "populatedTown", citizens: [citizen1, citizen2] };
    const div = document.createElement("div");
    ReactDOM.render(<Stage town={town} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Empty Town", () => {
  it("Created Components Correctly", () => {
    const town: Town = { name: "emptyTown", citizens: [] };
    const div = document.createElement("div");
    ReactDOM.render(<Stage town={town} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
