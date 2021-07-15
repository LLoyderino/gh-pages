import React from "react";
import { PageProps } from "gatsby";

import { Home } from "@layouts";

const IndexRoute = (props: PageProps) => (
  <Home>
    <h1>Path</h1>
    <p>stub for {props.path}</p>
  </Home>
);

export default IndexRoute;
