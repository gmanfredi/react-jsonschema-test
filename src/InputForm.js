import React, { Component } from "react";
import Form from "react-jsonschema-form";

export default class InputForm extends Component {
  render() {
    const schema = {
      title: "Todo",
      type: "object",
      required: ["title"],
      properties: {
        title: {
          type: "string",
          title: "Do what",
          default: "Some task"
        },
        done: {
          type: "boolean",
          title: "Done",
          default: false
        }
      }
    };
    return <div>
      <Form
        schema={schema}
        liveValidate={true}
        showErrorList={false}
      />
    </div>;
  }
}
