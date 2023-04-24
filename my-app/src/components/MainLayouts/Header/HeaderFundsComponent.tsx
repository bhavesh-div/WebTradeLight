import { Box, Button, Divider } from "@mui/material";
import HeaderFunds from "./HeaderFunds";

const HeaderFundsComponent = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderFunds label="BALANCE" value={100000.0} color="success" />
        <HeaderFunds label="EQUITY" value={100000.0} color="success" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider
          sx={{
            borderRight: "2px solid rgba(105, 105, 105, 0.25)",
            height: "49px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderFunds label="FREE FUNDS" value={100000.0} color="success" />
        <HeaderFunds label="MARGIN" value={100000.0} color="success" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider
          sx={{
            borderRight: "2px solid rgba(105, 105, 105, 0.25)",
            height: "49px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderFunds label="MARGIN LEVEL" value={0.0} color="#ED4C5C" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          <Divider
            sx={{
              borderRight: "2px solid rgba(105, 105, 105, 0.25)",
              height: "49px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#56b786 !important",
              width: "120px",
              fontSize: "10px",
              borderRadius: "4px",
              marginLeft: "35px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  fontSize: "10px",
                  lineHeight: "13px",
                  fontWeight: "400",
                }}
              >
                profit
              </Box>
              <Box
                sx={{
                  fontSize: "15px",
                  lineHeight: "23px",
                  fontFamily: "500",
                  letterSpacing: "-0.05em",
                }}
              >
                {" "}
                0.00 USD
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HeaderFundsComponent;
