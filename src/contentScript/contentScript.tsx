import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

const App = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center w-full text-3xl font-bold text-indigo-800 uppercase bg-gray-200 ">
      The extension you just installed is working Fine 🚀
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
