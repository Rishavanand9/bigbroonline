import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import styled from "styled-components";
import cardBg1 from "../assets/cardBg1.webp";
import theme from "../utils/customTheme";
import { ArrowBack } from "@mui/icons-material";
import { ListItemIcon, ListItemText } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DrawIcon from "@mui/icons-material/Gesture"; // Replace with the actual icon you want to use
import ReportIcon from "@mui/icons-material/Assessment";
import BookIcon from "@mui/icons-material/Book";
import NoteIcon from "@mui/icons-material/Note";
import LockIcon from "@mui/icons-material/Lock";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Timestamp from "./DateTime";

const StyledLogo = styled.img`
  height: 50px;
  border-radius: 16px;
  margin: 8px;
`;

const MenuItems = ({ handleMenuClose }) => (
  <>
    <MenuItem onClick={handleMenuClose}>
      <ListItemIcon>
        <AccountBalanceWalletIcon color={"primary"} />
      </ListItemIcon>
      <ListItemText primary="Balance: 2048.09 $" />
    </MenuItem>
    <Divider />
    <MenuItem onClick={handleMenuClose}>
      <ListItemIcon>
        <DrawIcon color={"primary"} />
      </ListItemIcon>
      <ListItemText primary="Draw" />
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ListItemIcon>
        <ReportIcon color={"primary"} />
      </ListItemIcon>
      <ListItemText primary="Report" />
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ListItemIcon>
        <BookIcon color={"primary"} />
      </ListItemIcon>
      <ListItemText primary="Ledger" />
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ListItemIcon>
        <NoteIcon color={"primary"} />
      </ListItemIcon>
      <ListItemText primary="Parchi" />
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ListItemIcon>
        <LockIcon color={"primary"} />
      </ListItemIcon>
      <ListItemText primary="Password" />
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ListItemIcon>
        <ExitToAppIcon color={"primary"} />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </MenuItem>
  </>
);

const AppBarComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if it's mobile


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.buttonColor,
        boxShadow: "none",
        border: "none",
      }}
    >
      <Toolbar>
        {location.pathname.includes("game") && (
          <IconButton color="inherit" edge="start" onClick={() => navigate(-1)}>
            {" "}
            {/* Update the onClick event */}
            <ArrowBack />
          </IconButton>
        )}
        <StyledLogo src={cardBg1} alt="Logo" />
        <Typography
          sx={{ marginLeft: 2, flexGrow: 1, "-webkit-text-stroke": "medium" }}
        >
          Website
        </Typography>
        {!isMobile && <Timestamp />}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Typography
            variant="caption"
            sx={{ margin: 1, "-webkit-text-stroke": "medium" }}
          >
            USER_ID
          </Typography>
          <Avatar />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItems />
        </Menu>
      </Toolbar>
      {isMobile && <Timestamp />}

    </AppBar>
  );
};

export default AppBarComponent;
