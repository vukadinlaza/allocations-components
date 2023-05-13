import React from "react";
import { SelectProps } from "./props";

function Select<T>({
  items,
  onChange,
  displayLabel,
  selected,
}: SelectProps<T>) {
  const handleSelectChange = (e: any) => {
    if (!items) return;
    onChange(e.target.value);
  };

  return (
    <select onChange={handleSelectChange} className="capitalize">
      <option selected>{selected}</option>
      {items &&
        items
          .filter((x) => x !== selected)
          .map((item: any, index: number) => (
            <option key={index}>
              {displayLabel ? displayLabel(item) : item}
            </option>
          ))}
    </select>
  );
}

export default Select;