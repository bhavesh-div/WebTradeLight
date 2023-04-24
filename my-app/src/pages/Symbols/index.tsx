import { Box, InputAdornment, TextField } from "@mui/material";
import MuiTabs from "../../components/common/MuiTabs";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const symbolTypes = ["Favourites", "All Symbols"];

const Symbols = () => {
  const [selectedSymbolType, setSelectedSymbolType] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleChangeSymbolType = (value: number) => {
    setSelectedSymbolType(value);
  };

  const handleChangeSearchText = (event: any) => {
    setSearchText(event.target.value);
  };

  return (
    <Box padding="20px" marginTop="65px">
      <Box sx={{ marginBottom: "7px" }}>
        <MuiTabs
          tabData={symbolTypes}
          handleChange={handleChangeSymbolType}
          value={selectedSymbolType}
          variant="fullWidth"
        />
      </Box>

      <Box>
        <TextField
          id="search"
          type="search"
          value={searchText}
          onChange={handleChangeSearchText}
          placeholder="Search For Assets to Trade"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              borderRadius: "6px",
              backgroundColor: "primary.main",
              height: "41px",
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

export default Symbols;
