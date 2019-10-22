export interface IWrapperHp {
  unitHp: IHp;
}

export interface IHp {
  getFullHp(): number;
  setHp(hp: number): void;
  getHp(): number;
  isDeath(): boolean;
}
