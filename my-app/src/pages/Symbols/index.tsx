import { Box, InputAdornment, TextField } from "@mui/material";
import MuiTabs from "../../components/common/MuiTabs";
import { useGetMediaQueryUp } from "../../hooks/useGetMediaQuery";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import SymbolTable from "./SymbolTable";

const symbolTypes = ["Favourites", "All Symbols"];

const Symbols = () => {
  const [selectedSymbolType, setSelectedSymbolType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const isMdUp = useGetMediaQueryUp("md");

  const handleChangeSymbolType = (value: number) => {
    setSelectedSymbolType(value);
  };

  const handleChangeSearchText = (event: any) => {
    setSearchText(event.target.value);
  };

  return (
    <Box padding="20px" marginTop={isMdUp ? "10px" : ""}>
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
            borderRadius: "6px",
            fontFamily: "Inter",
            fontWeight: "500",
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

      {/* <TableContainer component={Paper}>
        <Table
          style={{
            borderSpacing: "0px 5px",
            borderCollapse: "separate",
            border: "none",
            height: "40px",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "none" }}>Symbol</TableCell>
              <TableCell sx={{ textAlign: "right", border: "none" }}>
                Price
              </TableCell>
              <TableCell sx={{ textAlign: "right", border: "none" }}>
                Spread
              </TableCell>
              <TableCell sx={{ textAlign: "right", border: "none" }}>
                Change
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: "#DFE2E9",
                  marginBottom: "3px",
                  borderRadius: "4px",
                }}
              >
                <TableCell>
                  <Typography sx={{ color: "#191F2C", fontSize: "12px" }}>
                    {row.symbol}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <Typography sx={{ color: "red", fontSize: "12px" }}>
                    {row.price}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <Typography sx={{ color: "#191F2C", fontSize: "12px" }}>
                    {row.spread}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <Typography sx={{ color: "red", fontSize: "12px" }}>
                    {row.change}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      <SymbolTable />
    </Box>
  );
};

export default Symbols;
