import React from "react";
import { styled } from "@mui/material/styles";

function MenuItem({ onclick, children, icons, iconName }) {
  return (
    <Item onClick={onclick}>
      <img src={icons} alt={iconName} />
      {children}
    </Item>
  );
}

export default MenuItem;

const Item = styled("div")(() => ({
  borderRadius: "4px",
  background: "#ffffff",
  display: "flex",
  gap: "9px",
  padding: "0 16px",
  cursor: "pointer",
  fontFamily: "",
}));
