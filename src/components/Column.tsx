import { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { CardComponent } from "./CardComponent";
import { Paginator } from "./Paginator";

interface ColumnProps {
  listType: "ToDo" | "InProgress" | "Done";
  data: {
    id: number;
    title: string;
    comments: number;
    user: {
      type: string;
    };
    state: string;
  }[];
}

export const Column: React.FC<ColumnProps> = ({ listType, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  let pageNumbers = Array.from(
    { length: Math.ceil(data.length / itemsPerPage) },
    (_, i) => i + 1
  );

  const paginate = (items: any[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex);
  };

  const paginatedTodoData = paginate(data);

  return (
    <Col xs={4} className="mb-4">
      <h2 className="text-center fs-2 mb-4 mt-3" style={{ fontWeight: "500" }}>
        {listType}
      </h2>
      <Row className="list m-0 p-3 border border-dark rounded-1">
        {data &&
          paginatedTodoData.map(({ title, id, comments, user }) => (
            <CardComponent
              key={id}
              title={title}
              comments={comments}
              role={user.type}
            />
          ))}
        {data.length === 0 && (
          <Card.Title className="p-3 text-center fs-5 text-secondary">
            No issues yet
          </Card.Title>
        )}
        {pageNumbers.length > 1 && (
          <Paginator
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            onPageChange={setCurrentPage}
            pageNumbers={pageNumbers}
          />
        )}
      </Row>
    </Col>
  );
};
