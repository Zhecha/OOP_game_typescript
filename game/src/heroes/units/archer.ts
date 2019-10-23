import Unit from "./unit";
import { UnitsInfo } from "../UnitInfoConfig";
import { ISelectingAttackTargets } from "../IServices/ISelectingTargets";
import { IAttackTargets } from "../IServices/IAttackTargets";
import RangeSelectingTargets from "../Services/SelectingTargets/RangeSelectingTargets";
import SingleAttackTargets from "../Services/AttackTargets/SingleAttackTargets";

const hp = UnitsInfo.Archer.hp;
const damage = UnitsInfo.Archer.damage;

export default class Archer extends Unit {
  selectingTargets: ISelectingAttackTargets;
  attackingTargets: IAttackTargets;

  constructor(id: number) {
    super(id, hp, damage, "Archer");
    this.selectingTargets = new RangeSelectingTargets();
    this.attackingTargets = new SingleAttackTargets();
  }
}
