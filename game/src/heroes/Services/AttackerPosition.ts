import { UnitGameGridObjectType } from "../../redux/constants/GameGridConstants";

export default class AttackerPosition {
  static getPosition(team: UnitGameGridObjectType[], id: number) {
    return team.findIndex(unit => unit.id === id);
  }
}

// class Unit {}

// type IField = [Unit[], Unit[]];

// const field: IField = [
//   [new Unit(), new Unit(), new Unit()],
//   [new Unit(), new Unit(), new Unit()]
// ];

// interface ITargetSelecting {
//   getAttackTargets(
//     team1: IField[],
//     team2: IField[],
//     attackedId: number
//   ): Unit[];

//   attack(attacker: Unit, target: Unit, team1: IField, team2: IField): void;
// }

// class MeleeTargetSelecting implements ITargetSelecting {
//   getAttackTargets(team1: IField[], team2: IField[], attackedId: number) {
//     return [];
//   }

//   attack(attacker: Unit, target: Unit, team1: IField, team2: IField) {
//     target.setHP(target.getHP() - attacker.getAttackTargets()); 
//   }
// }

// class RangeTargetSelecting implements ITargetSelecting {
//   getAttackTargets(
//     allyTeam: IField[],
//     enemyTeam: IField[],
//     attackedId: number
//   ) {
//     return enemyTeam;
//   }

//   attack(attacker: Unit, target: Unit, team1: IField, team2: IField) {}
// }
