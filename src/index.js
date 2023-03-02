import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import createStore from "./store";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
