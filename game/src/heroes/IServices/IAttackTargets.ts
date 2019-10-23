import Unit from "../units/unit";
import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export interface IAttackTargets {
  dealDamage(
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attacker: Unit
  ): UnitGameGridObjectType[];
}

export interface IHealTargets {
  healDamage(
    healed: UnitGameGridObjectType[],
    healedId: number,
    healer: Unit
  ): void;
}
