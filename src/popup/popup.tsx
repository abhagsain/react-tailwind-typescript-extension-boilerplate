import React from "react";
import ReactDOM from "react-dom";
import Container from "../components/Container";
import "../styles.css";

const Popup = () => {
  return (
    <Container>
      <h2 className="text-2xl">Make it awesome 🤘🏻</h2>
    </Container>
  );
};

const root = document.createElement("div");
// root.setAttributeNode('id', )
document.body.appendChild(root);
ReactDOM.render(<Popup />, root);
