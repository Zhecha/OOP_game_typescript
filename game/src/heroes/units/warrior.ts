import Unit from "./unit";
import { UnitsInfo } from "../../heroes/UnitInfoConfig";
import { ISelectingTargets } from "../IServices/ISelectingTargets";
import { IAttackTargets } from "../../heroes/IServices/IAttackTargets";
import MeleeSelectingTargets from "../Services/SelectingTargets/MeleeSelectingTargets";
import MassAttackTargets from "../../heroes/Services/AttackTargets/MassAttackTargets";

const hp = UnitsInfo.Warrior.hp;
const damage = UnitsInfo.Warrior.damage;

export default class Warrior extends Unit {
  targets: ISelectingTargets;
  attackingTargets: IAttackTargets;

  constructor(id: number) {
    super(id, hp, damage, "Warrior");
    this.targets = new MeleeSelectingTargets();
    this.attackingTargets = new MassAttackTargets();
  }
}
