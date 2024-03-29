import Unit from "../../units/unit";

import { IAttackTargets } from "../../IServices/IAttackTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class SingleAttackTargets implements IAttackTargets {
  dealDamage(
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attacker: Unit
  ) {
    attacked.forEach(elem => {
      if (elem.unit.getId() === attackedId) {
        elem.unit.unitHp.setHp(
          elem.unit.unitHp.getHp() - attacker.unitDamage.getDamage()
        );
      }
      elem.unit.setAttacked(false);
    });

    return attacked.filter(hero => hero.unit.unitHp.isDeath());
  }
}
