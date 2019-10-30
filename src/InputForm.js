import React, { Component } from "react";
// import Form from "react-jsonschema-form";
import { Button, Container } from "@material-ui/core";
import Form from "rjsf-material-ui";

export default class InputForm extends Component {
  render() {
    const schema = {
      title: "Todo",
      type: "object",
      required: ["title"],
      properties: {
        title: {
          type: "string",
          title: "Title",
          default: ""
        },
        done: {
          type: "boolean",
          title: "Done",
          default: false
        }
      }
    };

    return (
      <Container maxWidth="sm">
        <Form schema={schema} liveValidate={true} showErrorList={false}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        </Form>
      </Container>
    );
  }
}
