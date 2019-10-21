import Unit from "../../Units/Unit";

import { ISelectingAttackTargets } from "../../IService/ISelectingTargets";

type IFields = [Unit[], Unit[]];

class RangeSelectingTargets implements ISelectingAttackTargets {
  getAttackTargets(
    attacker: IFields,
    attacked: IFields,
    attackedId: number,
    attackerId: number
  ): Unit[] {}
}
