import Unit from "../../Units/Unit";

import { ISelectingHealTargets } from "../../IService/ISelectingTargets";

type IFields = [Unit[], Unit[]];

export default class HealSelectingTargets implements ISelectingHealTargets {
  getHealTargets(healed: IFields, healedId: number): IFields {
    let fields: IFields = [[], []];

    healed.forEach((elem, index) => {
      elem.forEach(value => {
        if (!value.unitHp.isDeath()) {
          fields[index].push(value);
        }
      });
    });

    return fields;
  }
}
