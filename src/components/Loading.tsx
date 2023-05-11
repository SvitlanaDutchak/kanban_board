import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <Spinner
      as="span"
      animation="border"
      role="status"
      size="sm"
      aria-hidden="true"
      className="me-3"
    />
  );
};
