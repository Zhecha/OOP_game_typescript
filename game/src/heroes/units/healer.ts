import Unit from "./unit";
import { UnitsInfo } from "../../heroes/UnitInfoConfig";
import { ISelectingHealTargets } from "../IServices/ISelectingTargets";
import { IHealTargets } from "../../heroes/IServices/IAttackTargets";
import HealSelectingTargets from "../Services/SelectingTargets/HealSelectingTargets";
import SingleHealTargets from "../../heroes/Services/AttackTargets/SingleHealTargets";

const hp = UnitsInfo.Healer.hp;
const damage = UnitsInfo.Healer.damage;

export default class Healer extends Unit {
  selectingTargets: ISelectingHealTargets;
  healingTargets: IHealTargets;

  constructor(id: number) {
    super(id, hp, damage, "Healer");
    this.selectingTargets = new HealSelectingTargets();
    this.healingTargets = new SingleHealTargets();
  }
}
