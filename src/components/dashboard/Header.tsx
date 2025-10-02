import Dropdown from "@/elements/Dropdown";
import { first } from "lodash";

interface HeaderProps {
  propertyOptions: { label: string; value: string }[];
}

const Header = ({ propertyOptions }: HeaderProps) => {
  return (
    <div className="flex justify-between w-full">
      <div>Homeowners Dashboard</div>
      <Dropdown
        options={propertyOptions}
        defaultValue={first(propertyOptions)?.value}
      />
    </div>
  );
};

export default Header;
