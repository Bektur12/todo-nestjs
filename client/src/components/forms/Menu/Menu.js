import * as React from "react";
import { Menu as MUIMenu } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuItem from "./MenuItem";

function Menu({ options, open, onClose }) {
  return (
    <>
      <MUIMenu open={open} onClose={onClose} disableScrollLock>
        <MenuWrapper>
          {options.map((option) => (
            <MenuItem
              key={Math.random()}
              icons={option?.icon}
              onclick={() => {}}
            >
              {option.name}
            </MenuItem>
          ))}
        </MenuWrapper>
      </MUIMenu>
    </>
  );
}
export default Menu;

const MenuWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  rowGap: "16px",
  padding: "10px 0",
}));
