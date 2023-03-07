import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Menu from "../../forms/Menu/Menu";
import MenuItem from "../../forms/Menu/MenuItem";
import { Button } from "../../forms/Button/Button";

const pages = ["Javascript", "React", "Nodejs"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenUserMenu = () => setIsOpen(true);

  return (
    <ContainerAppBar>
      <Toolbar disableGutters>
        <div>
          <Menu>
            {pages.map((page) => (
              <MenuItem key={page}>
                <p>{page}</p>
              </MenuItem>
            ))}
          </Menu>
        </div>
        <LogoTitle>LOGO</LogoTitle>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <ButtonStyled>{page}</ButtonStyled>
          ))}
        </Box>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <Menu
          options={settings}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Toolbar>
    </ContainerAppBar>
  );
}
export default Header;

const ContainerAppBar = styled(AppBar)(() => ({
  background: "rgb(60, 60, 60)",
  padding: "0px 20px 0px 20px",
}));

const LogoTitle = styled("h5")(() => ({
  marginRight: "30px",
}));

const ButtonStyled = styled(Button)(() => ({
  color: "red",
}));
