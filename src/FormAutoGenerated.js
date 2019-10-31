import React, { Component } from "react";
import Form from "react-jsonschema-form";

export default class InputForm extends Component {
  render() {
    const schema = {
      title: "Auto-generated React Form",
      description: "Using react-json-schema",
      type: "object",
      properties: {
        firstName: {
          title: "First name",
          type: "string"
        },
        lastName: {
          title: "Last name",
          type: "string"
        },
        email: {
          title: "Email address",
          type: "string",
          format: "email"
        },
        password: {
          title: "Password",
          type: "string"
        }
      },
      required: ["firstName", "lastName", "email"]
    };

    const uiSchema = {
      password: {
        "ui:widget": "password"
      }
    };

    const onSubmit = ({ formData }, e) =>
      console.log("Data submitted: ", formData);

    return (
      <div className="container text-left">
        <Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit} />
      </div>
    );
  }
}
