import React from "react";
import "../styles/Header.css";
import { useSelector } from "react-redux";
import { AppStore } from "../redux/rootReducer";

const Header: React.FC = () => {
  let round = useSelector((state: AppStore) => state.queue.round);
  return (
    <div className="logo">
      <div className="rivets">
        <div className="seal">
          <div className="type">
            <h1>Dota2</h1>
            <em>Round {round}</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
