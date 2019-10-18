import { IWrapperHp, IHp } from "../IService/IHp";
import { IWrapperDamage, IDamage } from "../IService/IDamage";
import Hp from "../Service/UnitProperties/Hp";
import Damage from "../Service/UnitProperties/Damage";

export default class Unit implements IWrapperDamage, IWrapperHp {
  id: number;
  unitHp: IHp;
  unitDamage: IDamage;
  type: string;

  constructor(id: number, hp: number, damage: number, type: string) {
    this.id = id;
    this.type = type;
    this.unitHp = new Hp(hp);
    this.unitDamage = new Damage(damage);
  }

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }
}
