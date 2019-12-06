import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.tsx";
import registerServiceWorker from "./registerServiceWorker";

const assets = require("./assets.json");

ReactDOM.render(<App file={assets.town} />, document.getElementById("root"));
registerServiceWorker();
