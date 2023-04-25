import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
// import { useGetMediaQueryUp } from "../../hooks/useGetMediaQuery";
// import MainTabs from "../common/MainTabs";

import { useGetMediaQueryUp } from "../../../hooks/useGetMediaQuery";
import MainTabs from "../../common/MainTabs";
import SearchIcon from "@mui/icons-material/Search";

const symbolTypes = ["All", "PAMM", "Social Trading"];

const CopyTradeSymbol = () => {
  const [selectedSymbolType, setSelectedSymbolType] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleChangeSymbolType = (value: number) => {
    setSelectedSymbolType(value);
  };

  const handleChangeSearchText = (event: any) => {
    setSearchText(event.target.value);
  };

  return (
    <Box>
      <MainTabs
        tabData={symbolTypes}
        handleChange={handleChangeSymbolType}
        value={selectedSymbolType}
      />
      <Box>
        <TextField
          id="search"
          type="search"
          value={searchText}
          onChange={handleChangeSearchText}
          placeholder="Search"
          sx={{
            width: "100%",
            borderRadius: "6px",
            fontFamily: "Inter",
            fontWeight: "500",
            marginTop: "4px",
            height: "41px",
            "& .MuiInputBase-root": {
              borderRadius: "6px",
              backgroundColor: "primary.main",
              fontSize: "12px",
            },
            "& .MuiInputBase-input": {
              height: "8px",
              border: "none",
              borderRadius: "6px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color: "text.secondary",
                    height: "17px",
                    width: "17px",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default CopyTradeSymbol;
