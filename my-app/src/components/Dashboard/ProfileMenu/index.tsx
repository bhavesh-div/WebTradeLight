import {
  Menu,
  Box,
  MenuItem,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import EditProfile from "./EditProfile";
import AccountEdit from "../AccountEdit/index";
import { useState } from "react";
// import { useTranslation } from "react-i18next";

const ProfileMenu = ({
  open,
  handleClose,
  anchorEl,
}: {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
}) => {
  // const { t } = useTranslation();
  const [isEditProfileOpen, setisEditProfileOpen] = useState(false);

  const handleOpenModel = () => {
    setisEditProfileOpen(true);
  };
  const handleCloseModel = () => {
    setisEditProfileOpen(false);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={open}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box py="7px">
          <MenuItem
            onClick={() => {
              handleClose();
              handleOpenModel();
            }}
          >
            <Typography color="text.primary" variant="body3">
              Add Account
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography color="text.primary" variant="body3">
              Financial Operations
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            <Typography color="text.primary" variant="body3">
              Edit Operations
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography color="text.primary" variant="body3">
              About Us
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography color="text.primary" variant="body3">
              Become IB
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography color="text.primary" variant="body3">
              Become Money Manager
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography color="text.primary" variant="body3">
              Install Desktop App
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography color="text.primary" variant="body3">
              Restart
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography color="text.primary" variant="body3">
              User Settings
            </Typography>
          </MenuItem>
          <Divider sx={{ mx: 3.25, my: "2px !important" }} />
          <MenuItem onClick={handleClose}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                p: "0px 10px",
              }}
            >
              <Box
                component="img"
                src="/Images/Icons/flag_us.png"
                alt="usa"
                width="18.67px"
                height="14px"
              />
              &nbsp;&nbsp;&nbsp;{" "}
              <Typography
                color="text.primary"
                variant="h6"
                sx={{ fontSize: "15px", textTransform: "capitalize" }}
              >
                English
              </Typography>
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                display: "flex",
                gap: "18px",
                width: "100%",
                justifyContent: "flex-start",
                px: "10px",
              }}
            >
              <DarkModeOutlinedIcon sx={{ height: "10px", width: "10px" }} />{" "}
              <Typography
                color="text.primary"
                sx={{ fontSize: "15px", textTransform: "capitalize" }}
              >
                Dark
              </Typography>
            </Button>
          </MenuItem>
          <Divider sx={{ mx: 3.25, my: "2px !important" }} />
          <MenuItem onClick={handleClose}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                display: "flex",
                gap: "18px",
                width: "100%",
                justifyContent: "flex-start",
                px: "10px",
              }}
            >
              <Box
                component="img"
                src="/Images/Icons/contact.png"
                alt="contact"
                width="15.11px"
                height="5.67px"
              />
              <Typography
                color="text.primary"
                sx={{
                  fontSize: "15px",
                  textTransform: "capitalize",
                  paddingRight: "2px",
                  marginLeft: "-6px",
                }}
              >
                Contact
              </Typography>
            </Button>
          </MenuItem>
          <MenuItem>
            <Typography color="text.primary" variant="body3">
              Logout
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
      <AccountEdit open={isEditProfileOpen} handleClose={handleCloseModel} />
    </>
  );
};

export default ProfileMenu;
