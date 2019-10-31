import { ISelectingTargets } from "../../IServices/ISelectingTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class RangeSelectingTargets implements ISelectingTargets {
  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackerId: number
  ): UnitGameGridObjectType[] {
    
    if (attacked.find(hero => hero.unit.getId() !== attackerId)) {
      attacked.forEach(elem => {
        if (!elem.unit.unitHp.isDeath()) {
          elem.unit.setAttacked(true);
        }
      });
    }

    return attacked;
  }
}
