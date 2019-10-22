import Unit from "./Unit";
import { UnitsInfo } from "../UnitInfoConfig";
import { ISelectingAttackTargets } from "../IService/ISelectingTargets";
import { IAttackTargets } from "../IService/IAttackTargets";
import MeleeSelectingTargets from "../Service/SelectingTargets/MeleeSelectingTargets";
import MassAttackTargets from "../Service/AttackTargets/MassAttackTargets";

const hp = UnitsInfo.Warrior.hp;
const damage = UnitsInfo.Warrior.damage;

export default class Warrior extends Unit {
  selectingTargets: ISelectingAttackTargets;
  attackingTargets: IAttackTargets;

  constructor(id: number) {
    super(id, hp, damage, "Warrior");
    this.selectingTargets = new MeleeSelectingTargets();
    this.attackingTargets = new MassAttackTargets();
  }
}
