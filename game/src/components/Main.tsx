import React from "react";
import MainProps from "../interface/Main";
import "../styles/Main.css";

type Props = MainProps;

const Main: React.FC<Props> = props => {
  return <div className="game-container">{props.children}</div>;
};

export default Main;
