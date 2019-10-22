import Unit from "./Unit";
import { UnitsInfo } from "../UnitInfoConfig";
import { ISelectingHealTargets } from "../IService/ISelectingTargets";
import { IHealTargets } from "../IService/IAttackTargets";
import HealSelectingTargets from "../Service/SelectingTargets/HealSelectingTargets";
import SingleHealTargets from "../Service/AttackTargets/SingleHealTargets";

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
