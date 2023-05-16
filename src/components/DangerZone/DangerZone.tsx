import { TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useEffect, useState } from "react";
import { IDangerZone } from "./props";
import Button from "../Button/Button";

const DangerZone: FunctionComponent<IDangerZone> = ({
  toCheck,
  onClick,
  text,
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
    <div className="p-4 mb-6 border border-red-200 rounded-lg danger-zone disabled">
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
        label="Delete permanently"
        onClick={onClick}
        color="bg-red-600 text-white"
      />
    </div>
  );
};

export default DangerZone;
