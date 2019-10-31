import { IWrapperHp, IHp } from "../IServices/IHp";
import { IWrapperDamage, IDamage } from "../IServices/IDamage";
import Hp from "../../heroes/Services/UnitProperties/Hp";
import Damage from "../../heroes/Services/UnitProperties/Damage";
import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";
import { ISelectingTargets } from "../IServices/ISelectingTargets";
import { IAttackTargets } from "../IServices/IAttackTargets";

export default class Unit implements IWrapperDamage, IWrapperHp {
  id: number;
  unitHp: IHp;
  unitDamage: IDamage;
  type: string;
  active: boolean;
  targets: ISelectingTargets;
  attack: IAttackTargets;
  attacked: boolean;

  constructor(
    id: number,
    hp: number,
    damage: number,
    type: string,
    targets: ISelectingTargets,
    attack: IAttackTargets
  ) {
    this.id = id;
    this.type = type;
    this.unitHp = new Hp(hp);
    this.unitDamage = new Damage(damage);
    this.active = false;
    this.targets = targets;
    this.attack = attack;
    this.attacked = false;
  }

  isAttacked(): boolean {
    return this.attacked;
  }

  setAttacked(attacked: boolean) {
    this.attacked = attacked;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  setActive(active: boolean) {
    this.active = active;
  }

  getActive(): boolean {
    return this.active;
  }

  getType(): string {
    return this.type;
  }

  setTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackerId: number
  ): UnitGameGridObjectType[] {
    return this.targets.getAttackTargets(
      attacker,
      attacked,
      attackerId
    );
  }

  attackTargets(
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attacker: Unit
  ): UnitGameGridObjectType[] {
    return this.attack.dealDamage(attacked, attackedId, attacker);
  }
}
