import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

const App: React.FC<{}> = () => {
  return (
    <div>
      <h2>I'm Options Page</h2>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
