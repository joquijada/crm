import './NewCampaign.css'
import { useFormFields } from "../lib/hooksLib.ts";
import React, { useState } from "react";
import { API } from "aws-amplify";
import { onError } from "../lib/errorLib";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import LoaderButton from "../components/LoaderButton.tsx";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Campaign() {
  const [fields, handleFieldChange] = useFormFields({
    name: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const nav = useNavigate();

  function validateForm() {
    return fields.name.length > 0
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setIsLoading(true);
      await API.post('crm', '/campaigns', {
        body: {
          name: fields.name,
        }
      })
      setIsLoading(false);
      nav('/')
    } catch (error) {
      onError(error);
      setIsLoading(false);
    }
  }

  function renderForm() {
    return (
      <Form onSubmit={handleSubmit}>
        <Stack gap={3}>
          <Form.Group controlId="name">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control
              size="lg"
              autoFocus
              type="text"
              value={fields.name}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <LoaderButton
            size="lg"
            type="submit"
            variant="success"
            isLoading={isLoading}
            disabled={!validateForm()}>
            Create Campaign
          </LoaderButton>
          <Button className="cancel" variant="secondary" size="lg"
                  onClick={(e) => {
                    e.preventDefault()
                    nav('/')
                  }}>
            Go Back
          </Button>
        </Stack>
      </Form>
    );
  }

  return (
    <div className="NewCampaign">
      {renderForm()}
    </div>
  );
}
