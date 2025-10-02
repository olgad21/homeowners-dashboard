import Dropdown from "@/elements/Dropdown";
import { first } from "lodash";

interface HeaderProps {
  propertyOptions: { label: string; value: string }[];
  handlePropertySelect?: (value: string) => void;
}

const Header = ({ propertyOptions, handlePropertySelect }: HeaderProps) => {
  return (
    <div className="flex justify-between w-full">
      <div>Homeowners Dashboard</div>
      <Dropdown options={propertyOptions} onChange={handlePropertySelect} />
    </div>
  );
};

export default Header;
