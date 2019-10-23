import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export interface ISelectingAttackTargets {
  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attackerId: number
  ): UnitGameGridObjectType[];
}

export interface ISelectingHealTargets {
  getHealTargets(
    healed: UnitGameGridObjectType[],
    healedId: number
  ): UnitGameGridObjectType[];
}
