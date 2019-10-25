import Unit from "./unit";
import { UnitsInfo } from "../UnitInfoConfig";
import RangeSelectingTargets from "../Services/SelectingTargets/RangeSelectingTargets";
import SingleAttackTargets from "../Services/AttackTargets/SingleAttackTargets";

const hp = UnitsInfo.Archer.hp;
const damage = UnitsInfo.Archer.damage;

export default class Archer extends Unit {
  constructor(id: number) {
    super(
      id,
      hp,
      damage,
      "Archer",
      new RangeSelectingTargets(),
      new SingleAttackTargets()
    );
  }
}
