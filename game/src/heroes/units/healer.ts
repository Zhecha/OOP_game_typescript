import Unit from "./unit";
import { UnitsInfo } from "../../heroes/UnitInfoConfig";
import HealSelectingTargets from "../Services/SelectingTargets/HealSelectingTargets";
import SingleHealTargets from "../../heroes/Services/AttackTargets/SingleHealTargets";

const hp = UnitsInfo.Healer.hp;
const damage = UnitsInfo.Healer.damage;

export default class Healer extends Unit {
  constructor(id: number) {
    super(
      id,
      hp,
      damage,
      "Healer",
      new HealSelectingTargets(),
      new SingleHealTargets()
    );
  }
}
