export interface IWrapperHp {
  unitHp: IHp;
}

export interface IHp {
  getFullHp(): number;
  setHp(hp: number): void;
  getHp(): number;
  setFullHp(hp: number): void;
}
