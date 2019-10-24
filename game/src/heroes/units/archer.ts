import Unit from "./unit";
import { UnitsInfo } from "../UnitInfoConfig";
import { ISelectingTargets } from "../IServices/ISelectingTargets";
import { IAttackTargets } from "../IServices/IAttackTargets";
import RangeSelectingTargets from "../Services/SelectingTargets/RangeSelectingTargets";
import SingleAttackTargets from "../Services/AttackTargets/SingleAttackTargets";

const hp = UnitsInfo.Archer.hp;
const damage = UnitsInfo.Archer.damage;

export default class Archer extends Unit {
  targets: ISelectingTargets;
  attackingTargets: IAttackTargets;

  constructor(id: number) {
    super(id, hp, damage, "Archer");
    this.targets = new RangeSelectingTargets();
    this.attackingTargets = new SingleAttackTargets();
  }
}
