import Unit from "../../units/unit";

import { IHealTargets } from "../../IServices/IAttackTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class SingleHealTargets implements IHealTargets {
  healDamage(healed: UnitGameGridObjectType[], healedId: number, healer: Unit) {
    healed.forEach(elem => {
      if (elem.unit.getId() === healedId) {
        elem.unit.unitHp.setHp(
          elem.unit.unitHp.getHp() + healer.unitDamage.getDamage()
        );
      }
    });
  }
}
