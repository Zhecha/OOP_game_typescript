import { IWrapperHp, IHp } from "../IServices/IHp";
import { IWrapperDamage, IDamage } from "../IServices/IDamage";
import Hp from "../../heroes/Services/UnitProperties/Hp";
import Damage from "../../heroes/Services/UnitProperties/Damage";
import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export default class Unit implements IWrapperDamage, IWrapperHp {
  id: number;
  unitHp: IHp;
  unitDamage: IDamage;
  type: string;
  active: boolean;

  constructor(id: number, hp: number, damage: number, type: string) {
    this.id = id;
    this.type = type;
    this.unitHp = new Hp(hp);
    this.unitDamage = new Damage(damage);
    this.active = false;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  setActive(active: boolean) {
    this.active = active;
  }

  getActive(): boolean {
    return this.active;
  }
}
