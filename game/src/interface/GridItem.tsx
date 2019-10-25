import Unit from "../heroes/units/unit";
import { UnitGameGridObjectType } from "../redux/constants/GameGridConstants";
export default interface GridItemProps {
  PhotoUrl: string;
  teamA: boolean;
  unit: Unit;
  id: number;
  attacked: Array<UnitGameGridObjectType>;
  healed: Array<UnitGameGridObjectType>;
}
