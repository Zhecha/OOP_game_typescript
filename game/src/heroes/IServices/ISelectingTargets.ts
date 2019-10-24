import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export interface ISelectingTargets {
  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attackerId: number
  ): UnitGameGridObjectType[];
}
