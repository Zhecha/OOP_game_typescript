import Unit from "./Unit";
import { UnitsInfo } from "../UnitInfoConfig";
import { ISelectingAttackTargets } from "../IService/ISelectingTargets";
import { IAttackTargets } from "../IService/IAttackTargets";
import RangeSelectingTargets from "../Service/SelectingTargets/RangeSelectingTargets";
import MassAttackTargets from "../Service/AttackTargets/MassAttackTargets";

const hp = UnitsInfo.Mage.hp;
const damage = UnitsInfo.Mage.damage;

export default class Mage extends Unit {

  selectingTargets: ISelectingAttackTargets;
  attackingTargets: IAttackTargets;

  constructor(id: number) {
    super(id, hp, damage, "Mage");
    this.selectingTargets = new RangeSelectingTargets();
    this.attackingTargets = new MassAttackTargets();
  }
}
