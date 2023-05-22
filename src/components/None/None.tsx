import React, {FunctionComponent} from "react";
import { Card } from "@mui/material";
import Image from "next/image";

const None: FunctionComponent<{text: string, className?: string}> = ({ text, className }) => {
  return (
    <Card className={`card ${className}`} variant="outlined">
      <Image
        alt="None"
        src="/no_file.svg"
        className="mb-4 opacity-10"
        width={75}
        height={75}
      />
      <p>{text || ""}</p>
    </Card>
  );
}

export default None
