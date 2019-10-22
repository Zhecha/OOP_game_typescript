import Unit from "../../Units/Unit";

import { IHealTargets } from "../../IService/IAttackTargets";

type IFields = [Unit[], Unit[]];

export default class SingleHealTargets implements IHealTargets {
  healDamage(healed: IFields, healedId: number, healer: Unit) {
    healed.forEach(elem => {
      elem.forEach(value => {
        if (value.getId() === healedId) {
          value.unitHp.setHp(
            value.unitHp.getHp() + healer.unitDamage.getDamage()
          );
        }
      });
    });
  }
}
