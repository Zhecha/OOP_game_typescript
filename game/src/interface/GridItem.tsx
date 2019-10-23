import Unit from "../heroes/units/unit";
export default interface GridItemProps {
  PhotoUrl: string;
  teamA: boolean;
  unit: Unit;
  id: number;
}
