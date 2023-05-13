import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { FunctionComponent } from "react";
import { ILogoProps } from "./props";

const Logo: FunctionComponent<ILogoProps> = ({ onClick }) => {
  return (
    <Image
      src="/src/assets/images/logo.png"
      alt="Allocations.com"
      width={128}
      height={19}
      className="cursor-pointer"
      onClick={onClick ? () => onClick() : () => {}}
    />
  );
};

export default Logo;
