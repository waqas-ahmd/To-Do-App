import React, { useEffect } from "react";
import { Container } from "theme-ui";
import "./index.css";
import netlifyIdentity from "netlify-identity-widget";

export default (props) => {
  useEffect(() => {
    netlifyIdentity.init({});
  });

  return (
    <Container>
      <div className="d1">
        <h3>To Do App</h3>
        <button
          onClick={() => {
            netlifyIdentity.open();
          }}
        >
          Login
        </button>
      </div>
    </Container>
  );
};
