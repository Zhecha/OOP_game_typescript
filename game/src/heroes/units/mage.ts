import Unit from "./unit";
import { UnitsInfo } from "../../heroes/UnitInfoConfig";
import { ISelectingAttackTargets } from "../IServices/ISelectingTargets";
import { IAttackTargets } from "../../heroes/IServices/IAttackTargets";
import RangeSelectingTargets from "../Services/SelectingTargets/RangeSelectingTargets";
import MassAttackTargets from "../../heroes/Services/AttackTargets/MassAttackTargets";

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
