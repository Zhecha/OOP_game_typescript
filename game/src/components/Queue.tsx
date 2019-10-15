import React, { useEffect } from "react";
import { getNewQueue } from "../redux/actions/QueueWalkingAction";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../redux/rootReducer";
import QueueItem from "./QueueItem";

const Queue: React.FC = () => {
  const dispatch = useDispatch();
  let queue = useSelector((state: AppStore) => state.queue.queue);
  useEffect(() => {
    dispatch(getNewQueue());
  }, []);
  return (
    <div className="wrapper-queue">
      {queue.map(hero => (
        <QueueItem
          key={hero.id}
          id={hero.id}
          PhotoUrl={hero.PhotoUrl}
          teamA={hero.teamA}
          teamB={hero.teamB}
        />
      ))}
    </div>
  );
};

export default Queue;
