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
    let positions = [];
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
      } else {
        notAttackPositions.push(value);
        return;
      }
    });
    if (isAttack) {
      if (!DeathTargets.isDeathTeam(firstLine)) {
        let result: any = [];
        attackPositions.map((value: any) => {
          if (value !== undefined) {
            if (
              (firstLine[value].id === attackedId &&
                !DeathTargets.isDeathHero(attackedId, firstLine)) ||
              !DeathTargets.isDeathHero(firstLine[value].id, firstLine)
            ) {
              result.push(firstLine[value]);
            }
          }
        });
        if (result.length) {
          return result;
        } else {
          notAttackPositions.map((value: any) => {
            result.push(firstLine[value]);
          });
          return result;
        }
      } else {
        let result: any = [];
        attackPositions.map((value: any) => {
          if (value !== undefined) {
            if (
              (secondLine[value].id === attackedId &&
                !DeathTargets.isDeathHero(attackedId, secondLine)) ||
              !DeathTargets.isDeathHero(secondLine[value].id, secondLine)
            ) {
              result.push(secondLine[value]);
            }
          }
        });
        if (result.length) {
          return result;
        } else {
          notAttackPositions.map((value: any) => {
            result.push(secondLine[value]);
          });
          return result;
        }
      }
    } else {
      return [];
    }
  }
}
