import Unit from "./unit";
import { UnitsInfo } from "../../heroes/UnitInfoConfig";
import MeleeSelectingTargets from "../Services/SelectingTargets/MeleeSelectingTargets";
import MassAttackTargets from "../../heroes/Services/AttackTargets/MassAttackTargets";

const hp = UnitsInfo.Warrior.hp;
const damage = UnitsInfo.Warrior.damage;

export default class Warrior extends Unit {
  constructor(id: number) {
    super(
      id,
      hp,
      damage,
      "Warrior",
      new MeleeSelectingTargets(),
      new MassAttackTargets()
    );
  }
}
