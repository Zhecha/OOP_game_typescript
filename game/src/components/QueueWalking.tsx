import React from "react";
import "../styles/QueueWalking.css";
import Queue from "./Queue";

const QueueWalking: React.FC = () => {
  return (
    <div className="queue-container">
      <div className="queue-content">
        <Queue />
      </div>
    </div>
  );
};

export default QueueWalking;
