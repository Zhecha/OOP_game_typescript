import Unit from "./Unit";
import { UnitsInfo } from "../UnitInfoConfig";

const hp = UnitsInfo.Mage.hp;
const damage = UnitsInfo.Mage.damage;

export default class Mage extends Unit {
  constructor(id: number) {
    super(id, hp, damage, "Mage");
  }
}
