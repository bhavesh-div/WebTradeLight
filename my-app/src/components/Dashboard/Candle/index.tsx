import { Box } from "@mui/material";
import React from "react";
import { useGetMediaQueryUp } from "../../../hooks/useGetMediaQuery";

function CandleChart() {
  const isMdUp = useGetMediaQueryUp("md");
  return (
    <div>
      <Box marginTop={"-50px"} marginLeft={"70px"}>
        <Box
          component="img"
          src={`/Images/${isMdUp ? "candle-chart" : "candle-char-mobile"}.png`}
          width="100%"
          marginTop={isMdUp ? " 70px" : "60px"}
          padding="7px"
        />
      </Box>
    </div>
  );
}
export default CandleChart;
