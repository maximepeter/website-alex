import React, { Component } from "react";
import All from "../Icons/All";
import Lizard from "../Icons/Lizard";
import Monkey from "../Icons/Monkey";
import Insect from "../Icons/Insect";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.text = this.props.text;
  }
  render() {
    switch (this.text) {
      case "all":
        return (
          <div className="button">
            <a className={"icon " + this.text}>
              <All />
              <div className={"tooltip " + this.text}>{this.text}</div>
            </a>
          </div>
        );
      case "lizards":
        return (
          <div className="button">
            <a className={"icon " + this.text}>
              <Lizard />
              <div className={"tooltip " + this.text}>{this.text}</div>
            </a>
          </div>
        );
      case "monkeys":
        return (
          <div className="button">
            <a className={"icon " + this.text}>
              <Monkey />
              <div className={"tooltip " + this.text}>{this.text}</div>
            </a>
          </div>
        );
      case "insects":
        return (
          <div className="button">
            <a className={"icon " + this.text}>
              <Insect />
              <div className={"tooltip " + this.text}>{this.text}</div>
            </a>
          </div>
        );
    }
  }
}

export default Button;
