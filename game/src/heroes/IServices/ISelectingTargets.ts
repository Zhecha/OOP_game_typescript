import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export interface ISelectingTargets {
  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackerId: number
  ): UnitGameGridObjectType[];
}
