// import { CircularProgress } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";
import { IButtonProps } from "./props";

const Button: FunctionComponent<IButtonProps> = ({
  onClick,
  loading,
  label,
  disabled,
}) => {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={`mt-4 btn primary ${loading ? "loading" : ""} ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled || loading}
    >
      {loading && <CircularProgress color="inherit" size={12} />}
      {!loading && label}
    </button>
  );
};

export default Button;
