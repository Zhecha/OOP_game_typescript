import { UnitGameGridObjectType } from '../../redux/constants/GameGridConstants';

export default class DeathTargets {
    static isDeath(id: number, attackedTeam: UnitGameGridObjectType[]) {
        let hero = attackedTeam.filter((unit) => unit.id === id);
        return hero[0].unit.getHp() === 0 ? true : false ;
    }
} 