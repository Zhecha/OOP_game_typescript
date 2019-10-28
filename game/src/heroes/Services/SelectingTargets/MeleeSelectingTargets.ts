import { ISelectingTargets } from "../../IServices/ISelectingTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class MeleeSelectingTargets implements ISelectingTargets {
  private getLineToAttack(
    attacked: UnitGameGridObjectType[],
    attackedId: number
  ): UnitGameGridObjectType[] {
    if (attackedId % 2 !== 0) {
      let line = attacked.slice(3).concat(attacked.slice(0, 3));
      let line1 = line.slice(0, 3);
      let line2 = line.slice(3);
      if (line1.some(hero => !hero.unit.unitHp.isDeath())) {
        return line1;
      } else {
        return line2;
      }
    } else {
      let line1 = attacked.slice(0, 3);
      let line2 = attacked.slice(3);
      if (line1.some(hero => !hero.unit.unitHp.isDeath())) {
        return line1;
      } else {
        return line2;
      }
    }
  }

  private getAttackerPosition(
    attacker: UnitGameGridObjectType[],
    attackerId: number
  ): number {
    return attacker.findIndex(hero => hero.unit.getId() === attackerId);
  }

  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attackerId: number
  ): UnitGameGridObjectType[] {
    let attackedLine: UnitGameGridObjectType[] = [];
    let position: number = 0;
    if (attackedId % 2 !== 0) {
      attackedLine = this.getLineToAttack(attacked, attackedId);
      position = this.getAttackerPosition(attacker, attackerId);
    } else {
      let line1 = attacker.slice(3).concat(attacker.slice(0, 3));
      attackedLine = this.getLineToAttack(attacked, attackedId);
      position = this.getAttackerPosition(line1, attackerId);
    }
    console.log(attackedLine);
    if (
      attackedLine.some(hero => hero.unit.getId() === attackedId) &&
      position < 3
    ) {
      if (attackedLine[0].unit.getId() === attackedId) {
        return [attackedLine[0], attackedLine[1]];
      }
      if (attackedLine[2].unit.getId() === attackedId) {
        return [attackedLine[1], attackedLine[2]];
      }
      return attackedLine;
    } else {
      return [];
    }
  }
}
