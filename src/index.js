import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "babel-polyfill";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./store";

const output = <Provider store={store}><App/></Provider>;

ReactDOM.render(output, document.getElementById("appMountPoint"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
