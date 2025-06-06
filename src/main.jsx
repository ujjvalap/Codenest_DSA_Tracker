import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import QuestionsState from "./context/questions/QuestionsState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuestionsState>
      <App />
    </QuestionsState>
  </React.StrictMode>
);