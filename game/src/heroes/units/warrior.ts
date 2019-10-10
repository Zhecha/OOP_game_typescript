import Unit from "./unit";
import IUnit from "../IServices/IUnit";

export default class Warrior extends Unit implements IUnit {
  constructor(
    name: string,
    hp: number,
    damage: number,
    type: string,
    active: boolean
  ) {
    super(name, hp, damage, type, active);
  }

  getHp(): number {
    return this.hp;
  }

  setHp(hp: number) {
    this.hp = hp;
  }

  getDamage(): number {
    return this.damage;
  }

  setDamage(damage: number) {
    this.damage = damage;
  }

  getActive(): boolean {
    return this.active;
  }

  setActive(active: boolean) {
    this.active = active;
  }

  getFullHp() {
    return this.fullHp;
  }
}
