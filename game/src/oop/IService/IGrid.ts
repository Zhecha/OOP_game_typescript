import Unit from "../Units/Unit";

export default interface IGrid {
  getGrid(): [Unit[], Unit[]];
  getUnitById(id: number): Unit;
  isAllUnitsDeath(): boolean;
}
