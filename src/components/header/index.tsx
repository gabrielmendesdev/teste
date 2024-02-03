import BoxWithContentHeight from "../BoxWithContentHeight";
import React, { useState } from "react";
import Nav from "../nav";
import { AnimatePresence } from "framer-motion";
import Title from "../Title";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import "./styles.css";

const settings = ["Usuário Admnistrador", "Meus Dados", "Alterar Senha", "Sair"];

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="header">
      <BoxWithContentHeight className="w-full dark-background flex justify-between floating-button">
        <div
          className={`${isActive ? "buttonActive" : ""} button`}
          onClick={() => setIsActive(!isActive)}
        >
          <span className={`${isActive ? "topActive" : ""} top`}></span>
          <span className={`${isActive ? "midActive" : ""} mid`}></span>
          <span className={`${isActive ? "botActive" : ""} bot`}></span>
        </div>
      </BoxWithContentHeight>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      <div className="d-flex justify-content-between w-100">
        <Title className="text-light header-title m-0 ms-4 d-flex align-items-center">
          Trykat - Dashboard
        </Title>
        <Tooltip title="Open settings" className="me-4">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar sx={{ width: 70, height: 70 }}>G</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem
              key={setting}
              onClick={handleCloseUserMenu}
              disabled={setting === "Usuário Admnistrador"}
            >
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
