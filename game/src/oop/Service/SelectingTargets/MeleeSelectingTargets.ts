import Unit from "../../Units/Unit";

import { ISelectingAttackTargets } from "../../IService/ISelectingTargets";

type IFields = [Unit[], Unit[]];

export default class MeleeSelectingTargets implements ISelectingAttackTargets {
  getAttackTargets(
    attacker: IFields,
    attacked: IFields,
    attackedId: number,
    attackerId: number
  ): IFields {}
}
