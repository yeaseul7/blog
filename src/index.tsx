import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <HelmetProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
      ,
    </HelmetProvider>
  );
} else {
  root.render(
    <HelmetProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </HelmetProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
