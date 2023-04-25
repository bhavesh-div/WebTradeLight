import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  Container,
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";

const BottomMenu = () => {
  const [activeBottomNav, setActiveBottomNav] = useState(0);

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "82px",
          borderRadius: "20px 20px 0px 0px",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          zIndex: 1,
        }}
      >
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
            backgroundColor: "black",
            width: "100%",
          }}
        >
          <BottomNavigationAction
            label={<Typography variant="body2">Trade</Typography>}
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
            label={<Typography variant="body2">Calendar</Typography>}
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
            label={<Typography variant="body2">Copy Trading</Typography>}
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
            label={<Typography variant="body2">Top Movers</Typography>}
            icon={
              <Box
                component="img"
                src="/images/Icons/top-movers.svg"
                sx={{
                  height: "23px",
                  width: "23px",
                }}
              />
            }
          />
          <BottomNavigationAction
            label={<Typography variant="body2">News</Typography>}
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
      </Paper>
    </>
  );
};

export default BottomMenu;
