import React from "react";
import "../styles/Grid.css";
import GridProps from "../interface/Grid";
import { UnitGameGridObjectType } from "../redux/constants/GameGridConstants";
import GridItem from "./GridItem";

type Props = GridProps;

const Grid: React.FC<Props> = props => {
  const renderTeamGrid = (team: Array<UnitGameGridObjectType>) => {
    let resultArr = team.map((heroObj: UnitGameGridObjectType) => {
      return (
        <div className="box a" key={heroObj.id}>
          <GridItem
            PhotoUrl={heroObj.PhotoUrl}
            teamA={heroObj.teamA}
            unit={heroObj.unit}
            id={heroObj.id}
          />
        </div>
      );
    });

    return <>{resultArr}</>;
  };

  return <div className="wrapper">{renderTeamGrid(props.grid)}</div>;
};

export default Grid;
