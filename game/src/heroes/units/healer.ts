import Unit from "./unit";
import { UnitsInfo } from "../../heroes/UnitInfoConfig";
import { ISelectingTargets } from "../IServices/ISelectingTargets";
import { IHealTargets } from "../../heroes/IServices/IAttackTargets";
import HealSelectingTargets from "../Services/SelectingTargets/HealSelectingTargets";
import SingleHealTargets from "../../heroes/Services/AttackTargets/SingleHealTargets";

const hp = UnitsInfo.Healer.hp;
const damage = UnitsInfo.Healer.damage;

export default class Healer extends Unit {
  targets: ISelectingTargets;
  attackingTargets: IHealTargets;

  constructor(id: number) {
    super(id, hp, damage, "Healer");
    this.targets = new HealSelectingTargets();
    this.attackingTargets = new SingleHealTargets();
  }
}
