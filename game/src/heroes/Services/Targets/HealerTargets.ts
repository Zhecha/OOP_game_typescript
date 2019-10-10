import { UnitGameGridObjectType } from '../../../redux/constants/GameGridConstants';

export default class HealerTargets {
    static createTargets (healedTeam: UnitGameGridObjectType[], healedId: number ) {
        return healedTeam.filter((unit) => unit.id === healedId);
    }
}