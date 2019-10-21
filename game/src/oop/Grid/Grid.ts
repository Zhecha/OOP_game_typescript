import Unit from "../Units/Unit";
import IGrid from "../IService/IGrid";
import { Units } from "../Units/UnitFactory";

type IFields = [Unit[], Unit[]];

let units = ["Warrior", "Archer", "Mage", "Healer", "Archer", "Warrior"];

class Grid implements IGrid {
  fields: IFields;

  constructor() {
    let randomizedUnits = this.randomizeGrid(units);
    this.fields = this.createGrid(randomizedUnits);
  }

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

  private createGrid(units: Array<string>): IFields {
    let fields: IFields = [[], []];

    for (let i = 0; i < units.length; i++) {
      let index = Math.floor(i / 3);
      fields[index].push(Units.createInstance(i, units[i]));
    }

    return fields;
  }

  getGrid(): IFields {
    return this.fields;
  }
}

export const Fields = new Grid();
