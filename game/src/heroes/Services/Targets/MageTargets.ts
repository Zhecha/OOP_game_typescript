import { UnitGameGridObjectType } from '../../../redux/constants/GameGridConstants';

export default class MageTargets {
    static createTargets(attackedTeam: UnitGameGridObjectType[], attackedId: number) {
        let firstLine = attackedTeam.slice(0,3);
        let secondLine = attackedTeam.slice(3);
        if(firstLine.findIndex((unit) => unit.id === attackedId) !== -1 ){
            return firstLine;
        } else {
            return secondLine;
        }
    }
}