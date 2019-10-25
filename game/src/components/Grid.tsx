import React from "react";
import "../styles/Grid.css";
import GridProps from "../interface/Grid";
import { UnitGameGridObjectType } from "../redux/constants/GameGridConstants";
import GridItem from "./GridItem";

type Props = GridProps;

const Grid: React.FC<Props> = props => {
  const renderTeamGrid = (
    attacked: Array<UnitGameGridObjectType>,
    healed: Array<UnitGameGridObjectType>
  ) => {
    let resultArr = healed.map((heroObj: UnitGameGridObjectType) => {
      return (
        <div className="box a" key={heroObj.id}>
          <GridItem
            PhotoUrl={heroObj.PhotoUrl}
            teamA={heroObj.teamA}
            unit={heroObj.unit}
            id={heroObj.id}
            attacked={attacked}
            healed={healed}
          />
        </div>
      );
    });

    return <>{resultArr}</>;
  };

  return (
    <div className="wrapper">
      {renderTeamGrid(props.attacked, props.healed)}
    </div>
  );
};

export default Grid;
