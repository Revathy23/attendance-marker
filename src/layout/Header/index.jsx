import { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Popover,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

  return (
    <Box
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      style={{
        transition: "all 0.3s",
        backgroundColor: "#1E2A38"
      }}
    >
      <div className="flex w-[300px] items-center gap-1">
        <img
          src="/logo.svg"
          alt="logo"
          height="20"
          width="20"
          className="rounded-full bg-[#1E2A38] p-0.5 m-1"
        />
        <Typography fontSize="0.8rem" fontWeight={600} color="#fff">
          ATTENDANCE MARKER
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Avatar
          src="/broken-image.jpg"
          sx={{ width: 22, height: 22, 
            backgroundColor: "#CAD4E3", 
            cursor: "pointer",
            color: "#2E3B4E",
            '&:hover': {
              backgroundColor: "#4A90E2",
              color: "#E3EAF2",
            }
           }}
          onClick={handleClick}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{
            zIndex: 1300,
            marginTop: "7px",
          }}
        >
          <div
            onClick={handleLogout}
            style={{ display: "flex", alignItems: "center", padding: "10px" }}
          >
            <div className="flex w-[90px] justify-between cursor-pointer rounded">
              <Typography fontSize="0.75rem" >Logout</Typography>
              <ExitToAppIcon sx={{ fontSize: 16, mr: 1 }} />
            </div>
          </div>
        </Popover>
      </div>
    </Box>
  );
};

export default Header;
