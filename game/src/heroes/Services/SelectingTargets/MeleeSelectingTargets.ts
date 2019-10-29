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
    attackerId: number,
    attackedId: number
  ): number {
    if (attackedId % 2 !== 0) {
      return attacker.findIndex(hero => hero.unit.getId() === attackerId);
    } else {
      let line1 = attacker.slice(3).concat(attacker.slice(0, 3));
      return line1.findIndex(hero => hero.unit.getId() === attackerId);
    }
  }

  private isFistLineAlive(
    attacker: UnitGameGridObjectType[],
    attackerId: number
  ): boolean {
    if (attackerId % 2 !== 0) {
      let line = attacker.slice(3).concat(attacker.slice(0, 3));
      let line1 = line.slice(0, 3);
      if (line1.some(hero => !hero.unit.unitHp.isDeath())) {
        return true;
      }
      return false;
    } else {
      let line1 = attacker.slice(0, 3);
      if (line1.some(hero => !hero.unit.unitHp.isDeath())) {
        return true;
      }
      return false;
    }
  }

  getAttackTargets(
    attacker: UnitGameGridObjectType[],
    attacked: UnitGameGridObjectType[],
    attackedId: number,
    attackerId: number
  ): UnitGameGridObjectType[] {
    let attackedLine = this.getLineToAttack(attacked, attackedId);
    let position = this.getAttackerPosition(attacker, attackerId, attackedId);
    const isFirstLineAlive = this.isFistLineAlive(attacker, attackerId);
    if (!isFirstLineAlive) {
      position = position % 3;
    }
    if (
      attackedLine.some(hero => hero.unit.getId() === attackedId) &&
      position < 3
    ) {
      if (
        position === 0 &&
        (attackedLine[0].unit.getId() === attackedId ||
          attackedLine[1].unit.getId() === attackedId)
      ) {
        return [attackedLine[0], attackedLine[1]].filter(
          hero => !hero.unit.unitHp.isDeath()
        );
      }
      if (
        position === 2 &&
        (attackedLine[2].unit.getId() === attackedId ||
          attackedLine[1].unit.getId() === attackedId)
      ) {
        return [attackedLine[1], attackedLine[2]].filter(
          hero => !hero.unit.unitHp.isDeath()
        );
      }
      if (
        position === 1 &&
        (attackedLine[2].unit.getId() === attackedId ||
          attackedLine[1].unit.getId() === attackedId ||
          attackedLine[0].unit.getId() === attackedId)
      ) {
        return attackedLine.filter(hero => !hero.unit.unitHp.isDeath());
      }
      return [];
    } else {
      return [];
    }
  }
}
