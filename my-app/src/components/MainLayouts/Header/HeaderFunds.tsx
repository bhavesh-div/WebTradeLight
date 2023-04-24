import { FundData } from "../../../types/Funds";
import { Box, Typography } from "@mui/material";

const HeaderFunds = (fundData: FundData) => {
  return (
    <Box sx={{ m: 2 }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "10px",
          lineHeight: "13px",
          paddingLeft: "2px",
        }}
      >
        {fundData.label}
      </Typography>
      <Typography
        variant="body1"
        color={fundData.color}
        sx={{
          fontSize: "17px",
          lineHeight: "23px",
        }}
      >
        {fundData.value.toFixed(2)} &nbsp;
        <Typography component="span" variant="h4" color={fundData.color}>
          {fundData.label === "MARGIN LEVEL" ? "%" : "USD"}
        </Typography>
      </Typography>
    </Box>
  );
};

export default HeaderFunds;
