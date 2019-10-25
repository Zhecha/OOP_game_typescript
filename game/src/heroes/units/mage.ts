import Unit from "./unit";
import { UnitsInfo } from "../../heroes/UnitInfoConfig";
import RangeSelectingTargets from "../Services/SelectingTargets/RangeSelectingTargets";
import MassAttackTargets from "../../heroes/Services/AttackTargets/MassAttackTargets";

const hp = UnitsInfo.Mage.hp;
const damage = UnitsInfo.Mage.damage;

export default class Mage extends Unit {
  constructor(id: number) {
    super(
      id,
      hp,
      damage,
      "Mage",
      new RangeSelectingTargets(),
      new MassAttackTargets()
    );
  }
}
