import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { Messege } from "./Messege";
import { Loading } from "./Loading";

interface FormProps {
  loading: boolean;
}

export const FormCa: React.FC<FormProps> = ({ loading }) => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState<string>("");

  function handleButtonClick(): void {
    setTitle(value);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <>
      <Form className="d-flex gap-2 mt-4 mb-4">
        <FormControl
          className="p-2 form-input p-3 border border-dark rounded-1"
          id="input"
          value={value}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter repo URL"
        />
        <Button
          className="form-button p-3 border border-dark rounded-1"
          variant="outline-light"
          type="button"
          onClick={handleButtonClick}
        >
          {loading ? <Loading /> : ""}
          Load issues
        </Button>
      </Form>
      <Messege messege={title} />
    </>
  );
};
