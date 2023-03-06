import React from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, variant, onClick }) => {
  return (
    <MuiButton variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
