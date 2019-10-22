import Unit from "../Units/Unit";

type IFields = [Unit[], Unit[]];

export interface IAttackTargets {
  dealDamage(attacked: IFields, attackedId: number, attacker: Unit): void;
}

export interface IHealTargets {
  healDamage(healed: IFields, healedId: number, healer: Unit): void;
}
