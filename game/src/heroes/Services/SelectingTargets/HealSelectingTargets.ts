import { ISelectingTargets } from "../../IServices/ISelectingTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class HealSelectingTargets implements ISelectingTargets {
  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackerId: number
  ): UnitGameGridObjectType[] {

    if(attacker.find(hero => hero.unit.getId() === attackerId)){
      attacker.forEach(elem => {
        if (!elem.unit.unitHp.isDeath()) {
          elem.unit.setAttacked(true);
        }
      });  
    }
    return attacker;
  }
}
