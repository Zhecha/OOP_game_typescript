import React from "react";
import "../styles/Queue.css";
import QueueItemProps from "../interface/QueueItem";

type Props = QueueItemProps;

const QueueItem: React.FC<Props> = props => {
  return (
    <div className="box-queue a">
      <img src={props.PhotoUrl} className="box-queue-img" alt="HeroWalking" />
      <div className="box-queue-text">{props.teamA ? "A" : "B"}</div>
    </div>
  );
};

export default QueueItem;
