import Unit from "../../units/unit";
import { IAttackTargets } from "../../IServices/IAttackTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class MassAttackTargets implements IAttackTargets {
  dealDamage(
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attacker: Unit
  ) {
    attacked.forEach(unit =>
      unit.unit.unitHp.setHp(
        unit.unit.unitHp.getHp() - attacker.unitDamage.getDamage()
      )
    );
    return attacked.filter(hero => hero.unit.unitHp.isDeath());
  }
}
