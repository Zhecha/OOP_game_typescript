import Unit from "../Units/Unit";
import { Units } from "../Units/UnitFactory";

type IGrid = [Unit[], Unit[]];

const units = ["Warrior", "Archer", "Mage", "Healer", "Archer", "Warrior"];

class Grid {
  private randomizeGrid(units: Array<string>) {
    var currentIndex = units.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = units[currentIndex];
      units[currentIndex] = units[randomIndex];
      units[randomIndex] = temporaryValue;
    }

    return units;
  }

  create() {}
}
