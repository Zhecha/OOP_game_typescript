import { ISelectingTargets } from "../../IServices/ISelectingTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class RangeSelectingTargets implements ISelectingTargets {
  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attackerId: number
  ): UnitGameGridObjectType[] {
    let fields: UnitGameGridObjectType[] = [];

    attacked.forEach(elem => {
      if (!elem.unit.unitHp.isDeath()) {
        fields.push(elem);
      }
    });

    return fields;
  }
}
