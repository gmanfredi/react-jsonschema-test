import React, { Component } from "react";
// import { Button, Container } from "@material-ui/core";
import Form from "react-jsonschema-form";
// import Form from "rjsf-material-ui";

export default class InputForm extends Component {
  render() {
    const schema = {
      "title": "Schema dependencies",
      "description": "These samples are best viewed without live validation.",
      "type": "object",
      "properties": {
        "simple": {
          "src": "https://spacetelescope.github.io/understanding-json-schema/reference/object.html#dependencies",
          "title": "Simple",
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "credit_card": {
              "type": "number"
            }
          },
          "required": [
            "name"
          ],
          "dependencies": {
            "credit_card": {
              "properties": {
                "billing_address": {
                  "type": "string"
                }
              },
              "required": [
                "billing_address"
              ]
            }
          }
        },
        "arrayOfConditionals": {
          "title": "Pet owners",
          "type": "array",
          "items": {
            "$ref": "#/definitions/person"
          }
        }
      },
      "definitions": {
        "person": {
          "title": "Person",
          "type": "object",
          "properties": {
            "Do you have any pets?": {
              "type": "string",
              "enum": [
                "No",
                "Yes: One",
                "Yes: More than one"
              ],
              "default": "No"
            }
          },
          "required": [
            "Do you have any pets?"
          ],
          "dependencies": {
            "Do you have any pets?": {
              "oneOf": [
                {
                  "properties": {
                    "Do you have any pets?": {
                      "enum": [
                        "No"
                      ]
                    }
                  }
                },
                {
                  "properties": {
                    "Do you have any pets?": {
                      "enum": [
                        "Yes: One"
                      ]
                    },
                    "How old is your pet?": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "How old is your pet?"
                  ]
                },
                {
                  "properties": {
                    "Do you have any pets?": {
                      "enum": [
                        "Yes: More than one"
                      ]
                    },
                    "Do you want to get rid of any?": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "Do you want to get rid of any?"
                  ]
                }
              ]
            }
          }
        }
      }
    };

    const uiSchema = {
      "simple": {
        "credit_card": {
          "ui:help": "If you enter anything here then billing_address will be dynamically added to the form."
        }
      },
      "conditional": {
        "Do you want to get rid of any?": {
          "ui:widget": "radio"
        }
      },
      "arrayOfConditionals": {
        "items": {
          "Do you want to get rid of any?": {
            "ui:widget": "radio"
          }
        }
      },
      "fixedArrayOfConditionals": {
        "items": {
          "Do you want to get rid of any?": {
            "ui:widget": "radio"
          }
        },
        "additionalItems": {
          "Do you want to get rid of any?": {
            "ui:widget": "radio"
          }
        }
      }
    };

    return (
      <div maxWidth="sm" className="container text-left">
        <Form schema={schema} uiSchema={uiSchema}
          // liveValidate={true}
          // showErrorList={false}
        >
          {/* <Button variant="contained" color="primary">
            Submit
          </Button> */}
        </Form>
      </div>
    );
  }
}
