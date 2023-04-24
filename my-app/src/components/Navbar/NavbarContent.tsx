import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { NavbarContentProps } from "../../types/Navbar";

const NavbarContent = ({ handleMobileClose }: NavbarContentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        background: "#2E3034",
        height: "90%",
      }}
    >
      <Box
        sx={{
          padding: "21px 26px",
          borderRadius: "4px",
          marginTop: "39px",
          display: { xs: "block", md: "none" },
        }}
      >
        <Grid item xs={12} sx={{ marginBottom: "13px" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Box sx={{ margin: "9px" }}>
              <Typography variant="h2">Balance</Typography>
              <Typography variant="body1">
                100,000.00 &nbsp;
                <Typography component="span" variant="h4">
                  USD
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ margin: "9px" }}>
              <Typography variant="h2">Equity</Typography>
              <Typography variant="body1">
                100,000.00 &nbsp;
                <Typography component="span" variant="h4">
                  USD
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              borderRight: "1px solid rgba(105, 105, 105, 0.25)",
              width: "100%",
            }}
          />
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ margin: "9px" }}>
              <Typography variant="h2">Free Funds</Typography>
              <Typography variant="body1">
                100,000.00 &nbsp;
                <Typography component="span" variant="h4">
                  USD
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ margin: "9px" }}>
              <Typography variant="h2">Margin</Typography>
              <Typography variant="body1">
                100,000.00 &nbsp;
                <Typography component="span" variant="h4">
                  USD
                </Typography>
              </Typography>
            </Box>
          </Box>

          <Divider
            sx={{
              borderRight: "1px solid rgba(105, 105, 105, 0.25)",
              width: "100%",
            }}
          />

          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ margin: "9px" }}>
              <Typography variant="h2">Margin Level</Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#ED4C5C",
                }}
              >
                0.00 &nbsp;
                <Typography
                  component="span"
                  variant="h4"
                  style={{
                    color: "#ED4C5C",
                  }}
                >
                  %
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              borderRight: "1px solid rgba(105, 105, 105, 0.25)",
              width: "100%",
            }}
          />
        </Grid>

        <Box sx={{ display: { xs: "flex", md: "none", sm: "none" } }}>
          {" "}
          <Button
            variant="contained"
            sx={{
              background: "#56b786 !important",
              width: "100%",
              fontSize: "10px",
              borderRadius: "4px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  fontFamily: "DM Sans",
                  fontStyle: "normal",
                  fontSize: "10px",
                  lineHeight: "13px",
                  fontWeight: "400",
                  letterSpacing: "0.055em",
                  textAlign: "justify",
                }}
              >
                profit
              </Box>
              <Box
                sx={{
                  fontFamily: "DM Sans",
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "23px",
                  fontWeight: "500",
                  letterSpacing: "-0.05em",
                  color: "#FFFFFF",
                }}
              >
                {" "}
                0.00 &nbsp;
                <Typography
                  component="span"
                  variant="h4"
                  style={{
                    color: "#FFFFFF",
                  }}
                >
                  USD
                </Typography>
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          bottom: "0",
          position: "absolute",
          left: "0",
          right: "0",
          padding: "1px",
          margin: "20px",
        }}
      >
        <Button
          onClick={handleMobileClose}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center ",
            justifyContent: "center",
            color: " #FFFFFF",
            height: "57px",
            borderTop: "1px solid rgba(245, 255, 250, 0.08)",
            fontSize: "19px",
          }}
        >
          C{" "}
          <Typography component="span" style={{ textTransform: "lowercase" }}>
            lose
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NavbarContent;
