import Archer from "../heroes/units/archer";
import Mage from "../heroes/units/mage";
import Healer from "../heroes/units/healer";
import Warrior from "../heroes/units/warrior";

export default interface GridItemProps {
  PhotoUrl: string;
  teamA: boolean;
  unit: Archer | Mage | Healer | Warrior;
  id: number;
}
