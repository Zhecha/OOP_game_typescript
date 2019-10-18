import Unit from "./Unit";
import { UnitsInfo } from "../UnitInfoConfig";

const hp = UnitsInfo.Healer.hp;
const damage = UnitsInfo.Healer.damage;

export default class Healer extends Unit {
  constructor(id: number) {
    super(id, hp, damage, "Healer");
  }
}
