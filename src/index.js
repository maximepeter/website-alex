import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter/>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
