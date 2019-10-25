import { UnitGameGridObjectType } from "../redux/constants/GameGridConstants";

export default interface GridProps {
  attacked: Array<UnitGameGridObjectType>;
  healed: Array<UnitGameGridObjectType>;
}
