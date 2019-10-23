import Archer from "./archer";
import Mage from "./mage";
import Healer from "./healer";
import Warrior from "./warrior";
import Unit from "./unit";

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
