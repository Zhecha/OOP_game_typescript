import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class ArcherTargets {
  static createTargets(
    attackedTeam: UnitGameGridObjectType[],
    attackedId: number
  ) {
    return attackedTeam.filter(unit => unit.id === attackedId);
  }
}
