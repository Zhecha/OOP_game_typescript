import { IHp } from "../../IService/IHp";

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

  setFullHp(hp: number) {
    this.fullHp = hp;
  }

  setHp(hp: number) {
    this.currentHp = hp;
  }

  getHp(): number {
    return this.currentHp;
  }
}
