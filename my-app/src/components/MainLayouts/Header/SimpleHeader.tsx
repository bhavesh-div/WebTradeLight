import React, { useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Stack,
  Switch,
  Paper,
  Button,
  Link,
  BottomNavigationAction,
  Container,
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
        <List>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "auto",
              position: "relative",
            }}
          >
            <Box sx={{ height: "450px" }}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 1,
                }}
              >
                <Link component="button" underline="none">
                  <BottomNavigationAction
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
                  <Typography variant="h6">Trade</Typography>
                </Link>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  p: 1,
                }}
              >
                <Link component="button" underline="none">
                  <BottomNavigationAction
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/calendar.svg"
                        sx={{
                          width: "21px",
                          height: "23.33px",
                        }}
                      />
                    }
                  />
                  <Typography variant="h6">Calendar</Typography>
                </Link>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  p: 1,
                }}
              >
                <Link component="button" underline="none">
                  <BottomNavigationAction
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/copy-trading.svg"
                        sx={{
                          width: "21px",
                          height: "23.33px",
                        }}
                      />
                    }
                  />
                  <Typography variant="h6">Copy Trading</Typography>
                </Link>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  p: 1,
                }}
              >
                <Link component="button" underline="none">
                  <BottomNavigationAction
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/top-movers.svg"
                        sx={{
                          width: "21px",
                          height: "23.33px",
                        }}
                      />
                    }
                  />
                  <Typography variant="h6">Top Movers</Typography>
                </Link>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  p: 1,
                }}
              >
                <Link component="button" underline="none">
                  <BottomNavigationAction
                    icon={
                      <Box
                        component="img"
                        src="/images/Icons/news.svg"
                        sx={{
                          width: "21px",
                          height: "23.33px",
                        }}
                      />
                    }
                  />
                  <Typography variant="h6">News</Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  p: 2,
                }}
              >
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
              <Box sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    zIndex: 2,
                  }}
                >
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
            </Box>
          </Box>
        </List>
      </Drawer>
    </Box>
  );
}
