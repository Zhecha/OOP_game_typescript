import Unit from "../../units/unit";
import { IAttackTargets } from "../../IServices/IAttackTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class MassAttackTargets implements IAttackTargets {
  dealDamage(
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attacker: Unit
  ) {

    attacked.forEach(unit => {
      if (unit !== undefined && unit.unit.isAttacked()) {
        unit.unit.unitHp.setHp(
          unit.unit.unitHp.getHp() - attacker.unitDamage.getDamage()
        );
        unit.unit.setAttacked(false);
      }
    });

    return attacked.filter(hero => {
      if (hero !== undefined) {
        return hero.unit.unitHp.isDeath();
      }
    });
  }
}
