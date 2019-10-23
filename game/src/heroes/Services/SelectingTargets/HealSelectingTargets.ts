import { ISelectingHealTargets } from "../../IServices/ISelectingTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class HealSelectingTargets implements ISelectingHealTargets {
  getHealTargets(
    healed: UnitGameGridObjectType[],
    healedId: number
  ): UnitGameGridObjectType[] {
    let fields: UnitGameGridObjectType[] = [];

    healed.forEach(elem => {
      if (!elem.unit.unitHp.isDeath()) {
        fields.push(elem);
      }
    });

    return fields;
  }
}
