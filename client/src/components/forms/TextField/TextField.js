import React from "react";
import { TextField as TextMuiField } from "@mui/material";

export const TextField = ({ value, setValue }) => {
  return (
    <TextMuiField
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
