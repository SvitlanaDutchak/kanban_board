import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Column } from "./Column";
import { Octokit } from "@octokit/rest";
import { FormCa } from "./Form";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export const FormComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [todoData, setTodoData] = useState<any[]>([]);
  const [inProgressData, setInProgressData] = useState<any[]>([]);
  const [doneData, setDoneData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await octokit.request(
          "GET /repos/{owner}/{repo}/issues",
          {
            owner: "facebook",
            repo: "react",
            page: currentPage,
            per_page: 100,
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const todo = data.filter((item) => item.state === "open");
      const inProgress = data.filter((item) => item.locked === true);
      const done = data.filter((item) => item.state === "closed");
      setTodoData(todo);
      setInProgressData(inProgress);
      setDoneData(done);
    }
  }, [data]);

  return (
    <>
      <FormCa loading={loading} />
      <Row>
        <Column listType="ToDo" data={todoData} />
        <Column listType="InProgress" data={inProgressData} />
        <Column listType="Done" data={doneData} />
      </Row>
    </>
  );
};
