import Unit from "../../units/unit";
import { IAttackTargets } from "../../IServices/IAttackTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class MassAttackTargets implements IAttackTargets {
  dealDamage(
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attacker: Unit
  ) {
    // if (attacked.every(hero => hero.unit.getId() !== attackedId)) {
    //   return [];
    // }

    attacked.forEach(unit => {
      if (unit !== undefined) {
        unit.unit.unitHp.setHp(
          unit.unit.unitHp.getHp() - attacker.unitDamage.getDamage()
        );
      }
    });

    return attacked.filter(hero => {
      if (hero !== undefined) {
        return hero.unit.unitHp.isDeath();
      }
    });
  }
}
