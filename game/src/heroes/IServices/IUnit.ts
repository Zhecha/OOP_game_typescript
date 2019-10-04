export default interface IUnit {
  getHp(): number;
  setHp(hp: number): void;
  getDamage(): number;
  setDamage(damage: number): void;
  getActive(): boolean;
  setActive(active: boolean): void;
}
