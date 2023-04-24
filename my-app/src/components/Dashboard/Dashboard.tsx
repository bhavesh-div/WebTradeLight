import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Container,
  Button,
  AppBar,
  Box,
  Toolbar,
  Collapse,
  Stack,
  Divider,
  Grid,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Switch from "@mui/material/Switch";
import { useGetMediaQueryUp } from "../../hooks/useGetMediaQuery";
import NavbarContent from "../Navbar/NavbarContent";
import BottomMenu from "./BottomMenu";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ProfileMenu from "../../components/Dashboard/ProfileMenu/index";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import HeaderFundsComponent from "../MainLayouts/Header/HeaderFundsComponent";
import Symbols from "../../pages/Symbols";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isLight, setIsLight] = useState<boolean>(false);

  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const isMdUp = useGetMediaQueryUp("md");

  // Function to handle opening the mobile drawer
  const handleMobileOpen = (): void => {
    setMobileOpen(!mobileOpen);
  };

  // Function to handle closing the mobile drawer
  const handleMobileClose = (): void => {
    setMobileOpen(false);
  };

  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setOpenProfileMenu(false);
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{ background: "#191B20" }}>
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none", sm: "none" } }}>
            <Button
              variant="contained"
              sx={{
                background: "#56b786 !important",
                width: "120px",
                fontSize: "10px",
                borderRadius: "4px",
              }}
              onClick={handleMobileOpen}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "8px",
                    lineHeight: "10px",
                    fontWeight: "700",
                    letterSpacing: "0.055em",
                    textAlign: "justify",
                  }}
                >
                  profit
                </Box>
                <Box
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    lineHeight: "16px",
                    fontWeight: "500",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {" "}
                  0.00 &nbsp;
                  <Typography
                    component="span"
                    variant="h4"
                    sx={{
                      color: "#FFFFFF",
                    }}
                  >
                    USD
                  </Typography>
                </Box>
              </Box>
            </Button>
          </Box>

          <Container>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",

                  justifyContent: "center",
                },
              }}
            >
              {isMdUp && <HeaderFundsComponent />}
            </Box>
          </Container>

          <Box sx={{ display: "flex", justifyContent: "flex-end", zIndex: 2 }}>
            {isMdUp && (
              <Stack direction="row" spacing={1} alignItems="center">
                <DarkModeOutlinedIcon color={isLight ? "inherit" : "warning"} />
                <Switch
                  checked={isLight}
                  onChange={() => setIsLight(!isLight)}
                  inputProps={{ "aria-label": "controlled" }}
                  color="warning"
                  sx={{ m: 0 }}
                />
                <LightModeOutlinedIcon
                  color={isLight ? "warning" : "inherit"}
                />
              </Stack>
            )}
            <Button
              id="profile-menu"
              aria-controls={openProfileMenu ? "profile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openProfileMenu}
              variant="contained"
              disableElevation
              disableFocusRipple
              disableRipple
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                setOpenProfileMenu(true);
                setAnchorEl(event.currentTarget);
              }}
              endIcon={<ArrowDropDownOutlinedIcon />}
              sx={{
                ml: 4,
                px: "0 !important",
                minWidth: "auto",
                "& .MuiButton-iconSizeMedium": { ml: 0 },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <AccountCircleOutlinedIcon
                sx={{ height: "32px", width: "32px" }}
              />
            </Button>
            <ProfileMenu
              open={openProfileMenu}
              handleClose={handleCloseMenu}
              anchorEl={anchorEl}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {!isMdUp && <BottomMenu />}
      {!isMdUp && (
        <Collapse
          in={mobileOpen}
          timeout="auto"
          unmountOnExit
          sx={{
            position: "absolute",
            zIndex: "4",
            width: "100%",
          }}
        >
          <Box sx={{ background: "#2E3034", height: "100vh" }}>
            {" "}
            {mobileOpen && (
              <NavbarContent handleMobileClose={handleMobileClose} />
            )}
          </Box>
        </Collapse>
      )}
      <Grid container sx={{ flexWrap: { md: "nowrap" }, height: "10px" }}>
        <Grid item xs={12} md={3}>
          <Symbols />
          {isMdUp && <Divider orientation="horizontal" flexItem />}
        </Grid>
        {isMdUp && (
          <Divider orientation="vertical" flexItem sx={{ height: "93vh" }} />
        )}
        <Grid item xs={12} md={9}>
          CandleChart
        </Grid>
      </Grid>
    </Box>
  );
}
