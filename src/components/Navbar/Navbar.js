import React, { useEffect, useState } from "react";
import { AppBar, Button, Container, Box, Toolbar } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { LogoDev } from "@mui/icons-material/";
import "./navbar.scss";

const pages = ["About", "Contact"];
const settings = ["Profile", "My Raffles"];

const Navbar = () => {
  const [currentAccount, setAccount] = useState(null);
  const checkWalletConnection = () => {
    const ethereum = window.ethereum;
    return ethereum ? true : false;
  };
  const connectWalletHandler = async () => {
    if (checkWalletConnection()) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Metamask isn't installed");
    }
  };
  useEffect(() => {
    checkWalletConnection();
  }, []);
  return (
    <AppBar id="navbar" position="relative">
      {currentAccount != null && (
        <div className="wallet-status">Wallet Connected</div>
      )}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button className="nav-logo"
            key="logo"
            sx={{ my: 1, color: "white", fontWeight: "bold", fontSize: "22px" }}
          >
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
              <Button className="nav-items"
                key={page}
                sx={{
                  my: 1,
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "16px",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={() => connectWalletHandler()}
              key="account"
              sx={{
                my: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              <AccountCircle></AccountCircle>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
