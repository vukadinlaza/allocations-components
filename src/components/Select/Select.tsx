import React, {FunctionComponent} from "react";
import {SelectProps} from './props'

const Select: FunctionComponent<SelectProps<any>> = ({
  items,
  onChange,
  displayLabel,
  selected,
  className
}) => {
  const handleSelectChange = (e: any) => {
    if (!items) return;
    onChange(e.target.value);
  };

  return (
    <select onChange={handleSelectChange} className={`capitalize ${className}`}>
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
