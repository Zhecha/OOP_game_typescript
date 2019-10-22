import Unit from "../../Units/Unit";

import { IAttackTargets } from "../../IService/IAttackTargets";

type IFields = [Unit[], Unit[]];

export default class MassAttackTargets implements IAttackTargets {
  dealDamage(attacked: IFields, attackedId: number, attacker: Unit) {
    attacked.forEach(elem => {
      elem.forEach(value =>
        value.unitHp.setHp(
          value.unitHp.getHp() - attacker.unitDamage.getDamage()
        )
      );
    });
  }
}
