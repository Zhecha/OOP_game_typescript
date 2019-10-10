import Unit from "./unit";
import Mage from "./mage";
import Archer from "./archer";
import Healer from "./healer";
import Warrior from "./warrior";

export type HeroesTypes = "Mage" | "Warrior" | "Archer" | "Healer";

export type UnitTypes = Archer | Mage | Healer | Warrior;

export default class UnitFactory {
  static getInstance(type: string): UnitTypes {
    switch (type) {
      case "Mage":
        return new Mage("Mage", 150, 75, "Mage", false);
      case "Warrior":
        return new Warrior("Warrior", 300, 100, "Warrior", false);
      case "Archer":
        return new Archer("Archer", 200, 50, "Archer", false);
      case "Healer":
        return new Healer("Healer", 100, 50, "Healer", false);
      default: 
        return new Warrior("Warrior", 300, 100, "Warrior", false);
    }
  }
}
