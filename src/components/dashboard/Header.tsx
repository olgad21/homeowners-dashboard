import Dropdown from "@/elements/Dropdown";
import { first } from "lodash";

interface HeaderProps {
  propertyOptions: { label: string; value: string }[];
  handlePropertySelect?: (value: string) => void;
}

const Header = ({ propertyOptions, handlePropertySelect }: HeaderProps) => {
  return (
    <div className="flex justify-between w-full">
      <h1 className="text-sm font-medium">Homeowners Dashboard</h1>
      <Dropdown options={propertyOptions} onChange={handlePropertySelect} />
    </div>
  );
};

export default Header;
