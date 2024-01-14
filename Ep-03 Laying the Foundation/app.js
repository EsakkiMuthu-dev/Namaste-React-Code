import React from "react";
import ReactDOM from "react-dom";

// React Functional Component
const HeadingComponent = () => <h1> React Functional Component</h1>;
const BodyComponent = () => (
  <>
    <HeadingComponent />
    <hr></hr>
    <h3>Let Write Somethng</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyComponent />);
