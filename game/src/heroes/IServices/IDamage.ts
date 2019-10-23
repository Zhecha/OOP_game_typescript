export interface IWrapperDamage {
  unitDamage: IDamage;
}

export interface IDamage {
  setDamage(damage: number): void;
  getDamage(): number;
}
