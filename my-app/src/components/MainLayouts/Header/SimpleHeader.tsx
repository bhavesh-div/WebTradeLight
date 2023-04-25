import React, { useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Stack,
  Switch,
  Button,
  BottomNavigationAction,
  BottomNavigation,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ProfileMenu from "../../Dashboard/ProfileMenu";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [activeBottomNav, setActiveBottomNav] = useState(0);
  const [isLight, setIsLight] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open] = React.useState(false);

  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setOpenProfileMenu(false);
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <Drawer variant="permanent" open={open}>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <List>
              <Box>
                <BottomNavigation
                  showLabels
                  value={activeBottomNav}
                  onChange={(event, newValue) => {
                    setActiveBottomNav(newValue);
                    console.log("newvalue", newValue);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <BottomNavigationAction
                    sx={{
                      m: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    label={<Typography variant="body4">Trade</Typography>}
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/trade.svg"
                        sx={{
                          width: "21px",
                          height: "23.33px",
                        }}
                      />
                    }
                  />

                  <BottomNavigationAction
                    sx={{
                      m: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    label={<Typography variant="body4">Calendar</Typography>}
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/calendar.svg"
                        sx={{
                          height: "24px",
                          width: "20.87px",
                        }}
                      />
                    }
                  />

                  <BottomNavigationAction
                    sx={{
                      m: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    label={
                      <Typography variant="body4">Copy Trading</Typography>
                    }
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/copy-trading.svg"
                        sx={{
                          height: "20px",
                          width: "17px",
                        }}
                      />
                    }
                  />

                  <BottomNavigationAction
                    sx={{
                      m: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    label={
                      <Typography variant="body4"> Top Movers </Typography>
                    }
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/top-movers.svg"
                        sx={{
                          height: "20px",
                          width: "17px",
                        }}
                      />
                    }
                  />

                  <BottomNavigationAction
                    sx={{
                      m: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    label={<Typography variant="body4">News</Typography>}
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/news.svg"
                        sx={{
                          height: "23px",
                          width: "22.08px",
                        }}
                      />
                    }
                  />
                </BottomNavigation>
              </Box>
            </List>
          </Box>
          <Box>
            <List>
              <Box>
                <Box>
                  <Stack flexDirection="column" spacing={2} alignItems="center">
                    <DarkModeOutlinedIcon
                      color={isLight ? "inherit" : "warning"}
                    />
                    <Switch
                      checked={isLight}
                      onChange={() => setIsLight(!isLight)}
                      inputProps={{ "aria-label": "controlled" }}
                      color="warning"
                      sx={{ m: 0, rotate: "-90deg" }}
                    />
                    <LightModeOutlinedIcon
                      color={isLight ? "warning" : "inherit"}
                    />
                  </Stack>
                </Box>
                <Box>
                  <Button
                    id="profile-menu"
                    aria-controls={openProfileMenu ? "profile-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openProfileMenu}
                    variant="text"
                    onClick={(
                      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                      setOpenProfileMenu(true);
                      setAnchorEl(event.currentTarget);
                    }}
                  >
                    <AccountCircleOutlinedIcon
                      sx={{ height: "30px", width: "25px" }}
                    />
                  </Button>
                  <ProfileMenu
                    open={openProfileMenu}
                    handleClose={handleCloseMenu}
                    anchorEl={anchorEl}
                  />
                </Box>
              </Box>
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
