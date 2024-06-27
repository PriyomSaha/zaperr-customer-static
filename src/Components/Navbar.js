import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Logo from "../Logo.png";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ backgroundColor: "#123456" }}>
        <Box display="flex" alignItems="center">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
