import IGrid from "./IService/IGrid";
import Grid from "./Grid/Grid";
import Unit from "./Units/Unit";

type IFields = [Unit[], Unit[]];

export default class Game {
  teamA: IGrid;
  teamB: IGrid;

  constructor() {
    this.teamA = new Grid("teamA");
    this.teamB = new Grid("teamB");
  }
}
