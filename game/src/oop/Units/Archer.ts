import Unit from "./Unit";
import { UnitsInfo } from "../UnitInfoConfig";

const hp = UnitsInfo.Archer.hp;
const damage = UnitsInfo.Archer.damage;

export default class Archer extends Unit {
  constructor(id: number) {
    super(id, hp, damage, "Archer");
  }
}
