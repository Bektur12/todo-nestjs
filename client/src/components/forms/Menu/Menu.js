import * as React from "react";
import { Menu as MUIMenu } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuItem from "./MenuItem";

function Menu({ options, open, onClose }) {
  return (
    <>
      <MuiMenuStyled
        keepMounted
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        disableScrollLock
      >
        <MenuWrapper>
          {options?.map((option) => (
            <MenuItem key={Math.random()} onclick={() => {}}>
              {option}
            </MenuItem>
          ))}
        </MenuWrapper>
      </MuiMenuStyled>
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

const MuiMenuStyled = styled(MUIMenu)(() => ({
  marginTop: "30px",
}));
