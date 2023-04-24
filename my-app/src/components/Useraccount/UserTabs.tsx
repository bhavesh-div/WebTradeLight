import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  useMediaQuery,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";

import * as yup from "yup";
import { useFormik } from "formik";
import moment from "moment";

function UserTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          background: "#191B20",
          borderRadius: "6px",
          display: "flex",
          padding: "6px 10px",
          flexDirection: "column", // Flex direction based on screen size
        }}
      >
        <Box>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "standard"}
            sx={{ flexGrow: 1 }}
          >
            <Tab
              label="Profile"
              sx={{
                minWidth: isMobile ? "80px" : "200px",
                height: "40px",
                color: "white",
                borderBottom: "none",
                textAlign: "center",
                padding: "0px 12px",
                fontSize: "14px",
                fontFamily: "Inter",
                textTransform: "capitalize",
              }}
              style={
                activeTab === 0
                  ? {
                      backgroundColor: "#2e3034",
                      borderRadius: "6px",
                      color: "#fff",
                    }
                  : {}
              }
            />
            <Tab
              label="Address Detail"
              sx={{
                minWidth: isMobile ? "80px" : "200px",
                height: "30px",
                color: "white",
                borderBottom: "none",
                textAlign: "center",
                padding: "10px 18px",
                fontSize: "15px",
                fontFamily: "Inter",
                textTransform: "capitalize",
              }}
              style={
                activeTab === 1
                  ? {
                      backgroundColor: "#2e3034",
                      borderRadius: "6px",
                      color: "#fff",
                    }
                  : {}
              }
            />

            <Tab
              label="Bank Info"
              sx={{
                minWidth: isMobile ? "80px" : "200px",
                height: "40px",
                color: "white",
                borderBottom: "none",
                textAlign: "center",
                padding: "10px 18px",
                fontSize: "15px",
                fontFamily: "Inter",
                textTransform: "capitalize",
              }}
              style={
                activeTab === 2
                  ? {
                      backgroundColor: "#2e3034",
                      borderRadius: "6px",
                      color: "#fff",
                    }
                  : {}
              }
            />

            <Tab
              label="Verification"
              sx={{
                minWidth: isMobile ? "80px" : "200px",
                height: "40px",
                color: "white",
                borderBottom: "none",
                textAlign: "center",
                padding: "10px 18px",
                fontSize: "15px",
                fontFamily: "Inter",
                textTransform: "capitalize",
              }}
              style={
                activeTab === 3
                  ? {
                      backgroundColor: "#2e3034",
                      borderRadius: "6px",
                      color: "#fff",
                    }
                  : {}
              }
            />
          </Tabs>
        </Box>
      </Box>
      <Box>Hello</Box>
    </Box>
  );
}

export default UserTabs;
