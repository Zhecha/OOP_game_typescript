import Unit from "../Units/Unit";

type IFields = [Unit[], Unit[]];

export interface ISelectingAttackTargets {
  getAttackTargets(
    attacker: IFields,
    attacked: IFields,
    attackedId: number,
    attackerId: number
  ): IFields;
}

export interface ISelectingHealTargets {
  getHealTargets(healed: IFields, healedId: number): IFields;
}
