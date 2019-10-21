import Archer from "./Archer";
import Mage from "./Mage";
import Healer from "./Healer";
import Warrior from "./Warrior";
import Unit from "./Unit";

class UnitFactory {
  createInstance(id: number, type: string): Unit {
    switch (type) {
      case "Archer":
        return new Archer(id);
      case "Mage":
        return new Mage(id);
      case "Healer":
        return new Healer(id);
      case "Warrior":
        return new Warrior(id);
      default:
        return new Warrior(id);
    }
  }
}

export const Units = new UnitFactory();
