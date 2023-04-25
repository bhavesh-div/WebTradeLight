import React, { useState } from "react";
// import MainTabs from "../../components/common/MainTabs";
import StocksTable from "./StocksTable";
import MuiTabs from "../../components/common/MuiTabs";
import { useGetMediaQueryUp } from "../../hooks/useGetMediaQuery";
import { Box } from "@mui/material";

const stokesTypes = [
  "Open Positions",
  "Pending Orders",
  "Finance",
  "Global Positions",
];

export default function Stocks() {
  const [selectedSymbolType, setSelectedSymbolType] = useState(0);
  const isMdUp = useGetMediaQueryUp("md");

  const handleChangeSymbolType = (value: number) => {
    setSelectedSymbolType(value);
  };

  return (
    <div>
      <Box padding="10px" marginLeft={isMdUp ? "65px" : ""}>
        <Box sx={{ marginBottom: "7px" }}>
          <MuiTabs
            tabData={stokesTypes}
            handleChange={handleChangeSymbolType}
            value={selectedSymbolType}
            variant="fullWidth"
          />
        </Box>
        <StocksTable />
      </Box>
    </div>
  );
}
