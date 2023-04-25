import { Box, Typography, Divider } from "@mui/material";
import React from "react";

function bottomcon() {
  return (
    <div>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          background: "#fff",
          position: "fixed",
          height: "80px",
          width: "830px",
          top: "85vh",
          marginLeft: "100px",
          borderRadius: "100px",
          boxShadow:
            "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;",
          zIndex: "5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            height: "60px",
            width: "810px",
            background: "#DFE2E9",
            margin: "10px",
            borderRadius: "100px",
            gap: "40",
          }}
        >
          <Box sx={{ padding: "14px 20px" }}>
            <Typography variant="h5">BALANCE</Typography>
            <Typography variant="h4" sx={{ color: "#56B786" }}>
              100000 &nbsp;
              <Typography
                component="span"
                sx={{ color: "#bbb", fontSize: "14px" }}
              >
                USD
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ padding: "14px 20px" }}>
            <Typography variant="h5">EQUITY</Typography>
            <Typography variant="h4" sx={{ color: "#56B786" }}>
              100000 &nbsp;
              <Typography
                component="span"
                sx={{ color: "#bbb", fontSize: "14px" }}
              >
                USD
              </Typography>
            </Typography>
          </Box>
          <Divider sx={{ border: "1px solid rgba(105, 105, 105, 0.25)" }} />
          <Box sx={{ padding: "14px 20px" }}>
            <Typography variant="h5">FREE FUNDS</Typography>
            <Typography variant="h4" sx={{ color: "#56B786" }}>
              100000 &nbsp;
              <Typography
                component="span"
                sx={{ color: "#bbb", fontSize: "14px" }}
              >
                USD
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ padding: "14px 20px" }}>
            <Typography variant="h5">MARGIN</Typography>
            <Typography variant="h4" sx={{ color: "#56B786" }}>
              100000 &nbsp;
              <Typography
                component="span"
                sx={{ color: "#bbb", fontSize: "14px" }}
              >
                USD
              </Typography>
            </Typography>
          </Box>
          <Divider sx={{ border: "1px solid rgba(105, 105, 105, 0.25)" }} />
          <Box sx={{ padding: "14px 20px" }}>
            <Typography variant="h5">MARGIN LEVEL</Typography>
            <Typography variant="h4" sx={{ color: "#ED4C5C" }}>
              0.00%
            </Typography>
          </Box>
          <Divider sx={{ border: "1px solid rgba(105, 105, 105, 0.25)" }} />
          <Box
            sx={{
              background: "#56B786",
              borderRadius: "4px 100px 100px 4px",
              padding: "14px 20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontSize: "10px", letterSpacing: "0.055em" }}
            >
              PROFIT
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              0.00 &nbsp;
              <Typography
                component="span"
                sx={{ color: "#bbb", fontSize: "14px" }}
              >
                USD
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default bottomcon;
