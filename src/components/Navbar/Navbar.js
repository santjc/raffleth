import React from "react";
import { AppBar, Button, Container, Box, Toolbar } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { LogoDev } from "@mui/icons-material/";
import "./navbar.scss"

const pages = ["About", "Contact", "Get Started"];
const settings = ["Profile", "My Raffles"];
const Navbar = () => {
  return (
    <AppBar id="navbar" position="relative">
      <Container maxWidth="xl">
        <Toolbar>
        <Button key="logo" sx={{ my: 1, color: "white", fontWeight: "bold", fontSize:"22px"}}>
                <LogoDev></LogoDev>
        </Button>
          <Box
            sx={{
              justifyContent: "end",
              flexGrow: 1,
              display: "flex",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 1, color: "white", fontWeight: "normal", fontSize:"16px"}}
              >
                {page}
              </Button>
            ))}
            <Button key="account" sx={{ my: 1, color: "white", fontWeight: "bold", fontSize:"18px"}}>
                <AccountCircle></AccountCircle>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
