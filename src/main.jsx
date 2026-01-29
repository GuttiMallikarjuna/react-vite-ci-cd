import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ExampleProvider } from "./context/ExampleProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ExampleProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ExampleProvider>
);
