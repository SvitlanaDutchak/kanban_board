import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { Container } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent";

function App() {
  return (
    <Container>
      <FormComponent />
    </Container>
  );
}

export default App;
