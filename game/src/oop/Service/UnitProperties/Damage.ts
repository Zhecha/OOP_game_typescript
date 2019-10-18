import { IDamage } from "../../IService/IDamage";

export default class Damage implements IDamage {
  private damage: number;

  constructor(damage: number) {
    this.damage = damage;
  }

  setDamage(damage: number) {
    this.damage = damage;
  }

  getDamage(): number {
    return this.damage;
  }
}
