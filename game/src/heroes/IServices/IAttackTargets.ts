import Unit from "../units/unit";
import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export interface IAttackTargets {
  dealDamage(
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attacker: Unit
  ): UnitGameGridObjectType[];
}
