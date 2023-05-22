import { Card } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import Button from "../Button/Button";
import { IMissingDataProps } from "./props";

const MissingData: FunctionComponent<IMissingDataProps> = ({
  text,
  className,
  children
}) => {
  return (
    <Card className={`card ${className}`} variant="outlined">
      <Image
        alt="Missing"
        src="src/assets/images/missing.svg"
        className="mb-4 opacity-10"
        width={75}
        height={75}
      />
      <p className="mb-4">{text}</p>
      <Button>{children}</Button>
    </Card>
  );
};
export default MissingData;
