import React from "react";
import { Header } from "@atoms";

import "../../styles/main.scss";

const Home: React.FC = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default Home;
