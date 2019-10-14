import MageTargets from "./Targets/MageTargets";
import ArcherTargets from "./Targets/ArcherTargets";
import HealerTargets from "./Targets/HealerTargets";
import WarriorTargets from "./Targets/WarriorTargets";
import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export default class Targets {
  static createTargets(
    type: string,
    attackedTeam: UnitGameGridObjectType[],
    attackedId: number,
    position: number,
    attackedTeamType: string
  ): UnitGameGridObjectType[] {
    switch (type) {
      case "Mage":
        return MageTargets.createTargets(attackedTeam, attackedId);
      case "Archer":
        return ArcherTargets.createTargets(attackedTeam, attackedId);
      case "Healer":
        return HealerTargets.createTargets(attackedTeam, attackedId);
      case "Warrior":
        return WarriorTargets.createTargets(attackedTeam, attackedId, position, attackedTeamType);
      default:
        return [];
    }
  }
}
