import Unit from "./Unit";
import { UnitsInfo } from "../UnitInfoConfig";

const hp = UnitsInfo.Warrior.hp;
const damage = UnitsInfo.Warrior.damage;

export default class Warrior extends Unit {
  constructor(id: number) {
    super(id, hp, damage, "Warrior");
  }
}
