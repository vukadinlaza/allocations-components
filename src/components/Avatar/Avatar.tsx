import React, { FunctionComponent } from "react";
import { Avatar, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";
import { IAvatarProps, IMenuItem } from "./props";

const AvatarComponent: FunctionComponent<IAvatarProps> = ({
  email,
  menuItems,
  className,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = async (item: IMenuItem) => {
    if (item.action) {
      await item.action();
    }
    setOpen(false);
  };
  const getFirstLetter = () => {
    if (!email) return "A";
    return email[0];
  };

  return (
    <div className={`relative avatar ${className}`}>
      <Avatar
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
        sx={{
          width: 40,
          height: 40,
          backgroundColor: "#3db278",
          textTransform: "capitalize",
        }}
      >
        {getFirstLetter()}
      </Avatar>
      <h1>Hello</h1>
      {open && (
        <div className="absolute right-0 bg-white border top-12 z-[1000]">
          <MenuList>
            {menuItems &&
              menuItems.map((item, index) => (
                <MenuItem key={index} onClick={() => handleClick(item)}>
                  {item.title}
                </MenuItem>
              ))}
          </MenuList>
        </div>
      )}
    </div>
  );
};

export default AvatarComponent;
