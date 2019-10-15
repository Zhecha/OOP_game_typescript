import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export default class AttackerPosition {
  static getPosition(team: UnitGameGridObjectType[], id: number) {
    return team.findIndex(unit => unit.id === id);
  }
}
