import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo1 from "./assets/logo2.jpg";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleWhatsAppClick = () => {
    console.log("WhatsApp clicked");
    window.open("https://wa.me/87465000");
  };

  const handleFacebookClick = () => {
    console.log("Facebook clicked");
    // Add your Facebook click logic here
  };

  const handleInstagramClick = () => {
    console.log("Instagram clicked");
    window.open(
      "https://www.instagram.com/bigbroonlinebook/?igsh=MWhwdnJldTJ5c2xpeQ%3D%3D&utm_source=qr"
    );
    // Add your Instagram click logic here
  };

  const handleTelegramClick = () => {
    console.log("Telegram clicked");
    window.open("https://t.me/bigbroonlinebook");
    // Add your Telegram click logic here
  };

  const buttonPad = isMobile ? 10 : 40;
  return (
    <AppBar
      position="static"
      className="appBar"
      style={{
        boxShadow: "none",
        position: "fixed",
        top: 0,
        zIndex: 1,
        background: "none",
        height: isMobile ? "5em" : "10em",
        borderRadius: "0px 0px 100px 0px",
        // background: 'transparent'
        backgroundImage: "linear-gradient(360deg, #fdb7f0e3, #076568f5)",
      }}
    >
      <Toolbar style={{ alignItems: "self-start" }}>
        <img
          src={logo1}
          alt="logo"
          style={{
            maxWidth: isMobile ? 110 : 180,
            height: "auto",
            border: "2px solid #000",
            borderRadius: "15em",
            margin: isMobile ? 10 : 50,
          }}
        />
        <div style={{ flexGrow: 1 }}></div>
        <IconButton
          style={{ padding: buttonPad }}
          color="inherit"
          onClick={handleWhatsAppClick}
        >
          <WhatsAppIcon fontSize={isMobile ? "default" : "large"} />
        </IconButton>
        <IconButton
          style={{ padding: buttonPad }}
          color="inherit"
          onClick={handleFacebookClick}
        >
          <FacebookIcon fontSize={isMobile ? "default" : "large"} />
        </IconButton>
        <IconButton
          style={{ padding: buttonPad }}
          color="inherit"
          onClick={handleInstagramClick}
        >
          <InstagramIcon fontSize={isMobile ? "default" : "large"} />
        </IconButton>
        <IconButton
          style={{ padding: buttonPad }}
          color="inherit"
          onClick={handleTelegramClick}
        >
          <TelegramIcon fontSize={isMobile ? "default" : "large"} />
        </IconButton>
        <IconButton
          style={{ padding: buttonPad }}
          color="inherit"
          onClick={() => {}}
        >
          <AccountCircle fontSize={isMobile ? "default" : "large"} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
