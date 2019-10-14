import { UnitGameGridObjectType } from '../../redux/constants/GameGridConstants';

export default class DeathTargets {
    static isDeathHero(id: number, attackedTeam: UnitGameGridObjectType[]) {
        let hero = attackedTeam.filter((unit) => unit.id === id);
        return hero[0].unit.getHp() === 0 ? true : false ;
    }

    static isDeathTeam(team: UnitGameGridObjectType[]) {
        return team.every((unit) => unit.unit.getHp() === 0);
    }
} 