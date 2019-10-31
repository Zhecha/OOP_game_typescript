import { UnitGameGridObjectType } from "../redux/constants/GameGridConstants";

export default interface GridProps {
  healed: Array<UnitGameGridObjectType>;
  activeHero: UnitGameGridObjectType;
}
