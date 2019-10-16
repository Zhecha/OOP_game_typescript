import Unit from "./unit";
import IUnit from "../IServices/IUnit";

export default class Healer extends Unit implements IUnit {
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
