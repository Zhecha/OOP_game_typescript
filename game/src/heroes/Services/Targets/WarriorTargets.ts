import { UnitGameGridObjectType } from "../../../redux/constants/GameGridConstants";
import DeathTargets from "../DeathTargets";

export default class WarriorTargets {
  static createTargets(
    attackedTeam: UnitGameGridObjectType[],
    attackedId: number,
    position: number,
    attackedTeamType: string
  ) {
    let firstLine: UnitGameGridObjectType[] = [];
    let secondLine: UnitGameGridObjectType[] = [];
    let constPositions = [0, 1, 2];
    let positions: number[] = [];
    let isAttack: boolean;
    if (attackedTeamType === "teamA") {
      firstLine = attackedTeam.slice(3);
      secondLine = attackedTeam.slice(0, 3);
      isAttack = position < 3 ? true : false;
      positions = [position - 1, position, position + 1];
    } else {
      firstLine = attackedTeam.slice(0, 3);
      secondLine = attackedTeam.slice(3);
      isAttack = position > 2 ? true : false;
      positions = [position - 4, position - 3, position - 2];
    }
    let notAttackPositions: number[] = [];
    let attackPositions = positions.map(value => {
      if (value < 3 && value > -1) {
        return value;
      }
    });
    constPositions.forEach(value => {
      if (!positions.includes(value)) {
        notAttackPositions.push(value);
      }
    });
    if (isAttack) {
      if (!DeathTargets.isDeathTeam(firstLine)) {
        let result: UnitGameGridObjectType[] = [];
        attackPositions.map((value: any) => {
          if (value !== undefined) {
            result.push(firstLine[value]);
          }
        });
        if (result.some(unit => unit.id === attackedId)) {
          return result;
        } else {
          if (result.some(unit => !DeathTargets.isDeathHero(unit.id, result))) {
            return [];
          } else {
            let obj: UnitGameGridObjectType = firstLine.slice(
              notAttackPositions[0],
              notAttackPositions[0] + 1
            )[0];
            if (obj.id === attackedId) {
              return firstLine.slice(
                notAttackPositions[0],
                notAttackPositions[0] + 1
              );
            } else {
              return [];
            }
          }
        }
      } else {
        let result: UnitGameGridObjectType[] = [];
        attackPositions.map((value: any) => {
          if (value !== undefined) {
            result.push(secondLine[value]);
          }
        });
        if (result.some(unit => unit.id === attackedId)) {
          return result;
        } else {
          if (result.some(unit => !DeathTargets.isDeathHero(unit.id, result))) {
            return [];
          } else {
            let obj: UnitGameGridObjectType = secondLine.slice(
              notAttackPositions[0],
              notAttackPositions[0] + 1
            )[0];
            if (obj.id === attackedId) {
              return secondLine.slice(
                notAttackPositions[0],
                notAttackPositions[0] + 1
              );
            } else {
              return [];
            }
          }
        }
      }
    } else {
      return attackedTeam;
    }
  }
}
