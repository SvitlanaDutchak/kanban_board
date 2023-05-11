import React from "react";
import { Card } from "react-bootstrap";

interface CardProps {
  title: string;
  comments: number;
  role: string;
}

export const CardComponent: React.FC<CardProps> = ({
  title,
  comments,
  role,
}) => {
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <Card className="p-2 ">
      <Card.Title className="fs-5 mb-3" style={{ fontWeight: "500" }}>
        {formattedTitle}
      </Card.Title>
      <Card.Text>{role}</Card.Text>
      <Card.Text> Comments: {comments} </Card.Text>
    </Card>
  );
};
