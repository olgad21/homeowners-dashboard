"use client";

import { SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export interface DropdownOption {
  label: string;
  value: string;
}

interface RSuiteDropdownProps {
  options: DropdownOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const Dropdown = ({
  options,
  defaultValue,
  onChange,
  placeholder = "Select option",
}: RSuiteDropdownProps) => {
  return (
    <SelectPicker
      data={options}
      defaultValue={defaultValue}
      onChange={(value) => onChange?.(value as string)}
      placeholder={placeholder}
      cleanable={false}
      searchable={false}
      style={{ width: "300px" }}
      className="rsuite-dropdown-custom"
    />
  );
};

export default Dropdown;
