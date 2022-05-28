import React, { Component } from "react";

class Lizard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 6.5H17.5V17.5H6.5V6.5Z"
            stroke="currentColor"
            stroke-width="3"
          />
        </svg>
      </div>
    );
  }
}

export default Lizard;
