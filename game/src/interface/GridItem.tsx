import Mage from "../heroes/units/mage";
import Healer from "../heroes/units/healer";
import Archer from "../heroes/units/archer";
import Warrior from "../heroes/units/warrior";
import Unit from "../heroes/units/unit";
export default interface GridItemProps {
  PhotoUrl: string;
  teamA: boolean;
  unit: Mage | Healer | Archer | Warrior;
  id: number;
}
