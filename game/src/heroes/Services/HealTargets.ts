import { UnitGameGridObjectType } from '../../redux/constants/GameGridConstants';
import UnitFactory from '../units/unitFactory';

export default class HealTargets {
    static healingTargets(healedTeam: UnitGameGridObjectType[]) {
        let health = UnitFactory.getInstance('Healer').getDamage();
        let currentHp = healedTeam.map((unit) => unit.unit.getHp());
        let fullHp = healedTeam.map((unit) => unit.unit.getFullHp());
        let lastHp = currentHp.map((hp,index) => hp + health > fullHp[index] ? fullHp[index] : hp + health);
        for(let i = 0; i < lastHp.length; i++){
            healedTeam[i].unit.setHp(lastHp[i]);
        }
    }
}