import React, { FunctionComponent } from "react";
import Image from "next/image";
import { ILogoProps } from "./props";

const Logo: FunctionComponent<ILogoProps> = ({ onClick, className }) => {
  return (
    <Image
      src="/logo.png"
      alt="Allocations.com"
      width={128}
      height={19}
      className={`cursor-pointer ${className}`}
      data-testid="logo"
      onClick={onClick ? () => onClick() : () => {}}
    />
  );
};

export default Logo;
