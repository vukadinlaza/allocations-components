import React, { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { IDangerZone } from "./props";
import Button from "../Button";

const DangerZone: FunctionComponent<IDangerZone> = ({
  toCheck,
  onClick,
  text,
  className,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    if (toCheck) {
      setDisabled(!(toCheck === name));
    }
  }, [name]);
  return (
    <div className={`p-4 mb-6 border border-red-200 rounded-lg danger-zone disabled ${className}`}>
      <h2 className="mb-2 text-red-600">Danger zone</h2>
      <p className="mb-2">{text}</p>
      <TextField
        disabled={loading}
        size="small"
        variant="outlined"
        placeholder="Enter complete name of element"
        className="w-full"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Button
        loading={loading}
        disabled={disabled}
        onClick={onClick}
        color="bg-red-600 text-white"
      >
        Delete permanently
      </Button>
    </div>
  );
};

export default DangerZone;
