import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export default class AttackerPosition {
  static getPosition(team: UnitGameGridObjectType[], id: number) {
    let position = team.findIndex(unit => unit.id === id);
    let line1 = team.slice(0, 3);
    let line2 = team.slice(3);
    if(line1.every((unit)=> unit.id !== id)){

    } else {
        
    }
  }
}
