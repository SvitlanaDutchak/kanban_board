import React from "react";
import { Alert } from "react-bootstrap";

interface Messege {
  messege: string;
}

export const Messege: React.FC<Messege> = ({messege}) => {
  return (
    <>
      {messege ? (
        <Alert variant="success">Text: {messege}</Alert>
      ) : (
        <Alert variant="info">Please enter value</Alert>
      )}
    </>
  );
};

