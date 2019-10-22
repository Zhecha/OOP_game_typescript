import Unit from "../../Units/Unit";

import { ISelectingAttackTargets } from "../../IService/ISelectingTargets";

type IFields = [Unit[], Unit[]];

export default class RangeSelectingTargets implements ISelectingAttackTargets {
  getAttackTargets(
    attacker: IFields,
    attacked: IFields,
    attackedId: number,
    attackerId: number
  ): IFields {
    let fields: IFields = [[], []];

    attacked.forEach((elem, index) => {
      elem.forEach(value => {
        if (!value.unitHp.isDeath()) {
          fields[index].push(value);
        }
      });
    });

    return fields;
  }
}
