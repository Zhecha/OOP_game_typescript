import { UnitGameGridObjectType } from '../../redux/constants/GameGridConstants';
import UnitFactory from '../units/unitFactory';

export default class AttackingTargets {
    static attackTargets(attacker: string, attackedTeam: UnitGameGridObjectType[]) {
        let damage = UnitFactory.getInstance(attacker).getDamage();
        let currentHp = attackedTeam.map((unit) => unit.unit.getHp());
        let lastHp = currentHp.map((hp) => hp - damage > 0 ? hp - damage : 0);
        for(let i = 0; i < lastHp.length; i++){
            attackedTeam[i].unit.setHp(lastHp[i]);
        }
        return attackedTeam;
    }
}