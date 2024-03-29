import { ISelectingTargets } from "../../IServices/ISelectingTargets";
import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";

export default class MeleeSelectingTargets implements ISelectingTargets {
  private getLineToAttack(
    attacked: UnitGameGridObjectType[],
    attackerId: number
  ): UnitGameGridObjectType[] {
    if (attackerId % 2 === 0) {
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
    if (attackerId % 2 === 0) {
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
    attackerId: number
  ): UnitGameGridObjectType[] {
    let attackedLine = this.getLineToAttack(attacked, attackerId);
    let position = this.getAttackerPosition(attacker, attackerId);
    const isFirstLineAlive = this.isFistLineAlive(attacker, attackerId);
    if (!isFirstLineAlive) {
      position = position % 3;
    }
    if (attackedLine.some(hero => !hero.unit.unitHp.isDeath()) && position < 3) {
      if (position === 0 && (!attackedLine[0].unit.unitHp.isDeath() || !attackedLine[1].unit.unitHp.isDeath())) {
        return [attackedLine[0], attackedLine[1]].filter(hero => !hero.unit.unitHp.isDeath()).map(hero => {hero.unit.setAttacked(true); return hero}); 
      } else if(position === 0 && !attackedLine[2].unit.unitHp.isDeath() && attackedLine[0].unit.unitHp.isDeath() && attackedLine[1].unit.unitHp.isDeath()) {
        return [attackedLine[2]].filter(hero => !hero.unit.unitHp.isDeath()).map(hero => {hero.unit.setAttacked(true); return hero}); 
      } else if (position === 2 && (!attackedLine[2].unit.unitHp.isDeath() || !attackedLine[1].unit.unitHp.isDeath())) {
        return [attackedLine[1], attackedLine[2]].filter(hero => !hero.unit.unitHp.isDeath()).map(hero => {hero.unit.setAttacked(true); return hero});
      } else if (position === 2 && !attackedLine[0].unit.unitHp.isDeath() && attackedLine[2].unit.unitHp.isDeath() && attackedLine[1].unit.unitHp.isDeath()){
        return [attackedLine[0]].filter(hero => !hero.unit.unitHp.isDeath()).map(hero => {hero.unit.setAttacked(true); return hero}); 
      } else if (position === 1 && (!attackedLine[2].unit.unitHp.isDeath() || !attackedLine[1].unit.unitHp.isDeath()
          || !attackedLine[0].unit.unitHp.isDeath())) {
        return attackedLine.filter(hero => !hero.unit.unitHp.isDeath()).map(hero => {hero.unit.setAttacked(true); return hero}); 
      }
      return [];
    } else {
      return [];
    }
  }
}
