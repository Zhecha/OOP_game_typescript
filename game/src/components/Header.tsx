import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <div className="logo">
      <div className="rivets">
        <div className="seal">
          <div className="type">
            <h1>Dota2</h1>
            <em>since 2019/09/30</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
