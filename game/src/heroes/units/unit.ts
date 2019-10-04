export default abstract class Unit {
  name: string;
  hp: number;
  damage: number;
  type: string;
  active: boolean;

  constructor(
    name: string,
    hp: number,
    damage: number,
    type: string,
    active: boolean
  ) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.type = type;
    this.active = active;
  }
}
