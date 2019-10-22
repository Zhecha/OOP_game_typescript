import Unit from "./Unit";
import { UnitsInfo } from "../UnitInfoConfig";
import { ISelectingAttackTargets } from "../IService/ISelectingTargets";
import { IAttackTargets } from "../IService/IAttackTargets";
import RangeSelectingTargets from "../Service/SelectingTargets/RangeSelectingTargets";
import SingleAttackTargets from "../Service/AttackTargets/SingleAttackTargets";

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
