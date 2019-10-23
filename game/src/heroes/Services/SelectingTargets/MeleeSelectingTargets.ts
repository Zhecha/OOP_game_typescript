import { ISelectingAttackTargets } from "../../IServices/ISelectingTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class MeleeSelectingTargets implements ISelectingAttackTargets {
  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attackerId: number
  ): UnitGameGridObjectType[] {
    return attacked;
  }
}
