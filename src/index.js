import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import {HashRouter as Router} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import {store} from "./store";

const output = <Provider store={store}><App/></Provider>;

ReactDOM.render(output, document.getElementById("appMountPoint"));
registerServiceWorker();