import { IHp } from "../../IServices/IHp";

export default class Hp implements IHp {
  private currentHp: number;
  private fullHp: number;

  constructor(hp: number) {
    this.currentHp = hp;
    this.fullHp = hp;
  }

  getFullHp(): number {
    return this.fullHp;
  }

  setHp(hp: number) {
    if (hp <= 0) {
      this.currentHp = 0;
    } else if (hp >= this.fullHp) {
      this.currentHp = this.fullHp;
    } else {
      this.currentHp = hp;
    }
  }

  getHp(): number {
    return this.currentHp;
  }

  isDeath(): boolean {
    return this.currentHp === 0 ? true : false;
  }
}
