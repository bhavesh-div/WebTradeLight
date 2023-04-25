import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
} from "@mui/material";

import { symbolsData } from "../../types/Dashboard/Symbol";
import SymbolTableRow from "./SymbolTableRow";

const symbols: symbolsData[] = [
  {
    Symbol: "symbol.png",
    SymbolName: "GBPUSD",
    Price: 1.23752,
    Spread: 14,
    Change: 0.3,
  },
  {
    Symbol: "symbol.png",
    SymbolName: "GBPUSD",
    Price: 1.23752,
    Spread: 14,
    Change: 0.3,
  },
  {
    Symbol: "symbol.png",
    SymbolName: "GBPUSD",
    Price: 1.23752,
    Spread: 14,
    Change: 0.3,
  },
  {
    Symbol: "symbol.png",
    SymbolName: "GBPUSD",
    Price: 1.23752,
    Spread: 14,
    Change: 0.3,
  },
  {
    Symbol: "symbol.png",
    SymbolName: "GBPUSD",
    Price: 1.23752,
    Spread: 14,
    Change: 0.3,
  },
  {
    Symbol: "symbol.png",
    SymbolName: "GBPUSD",
    Price: 1.23752,
    Spread: 14,
    Change: 0.3,
  },
  {
    Symbol: "symbol.png",
    SymbolName: "GBPUSD",
    Price: 1.23752,
    Spread: 14,
    Change: 0.3,
  },
];

const SymbolTable = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table
        style={{
          borderSpacing: "0px 5px",
          borderCollapse: "separate",
          border: "none",
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
        {/* <TableBody>
          {symbols.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: "#191B20",
                marginBottom: "3px",
                borderRadius: "4px",
                "& td:first-of-type": {
                  borderTopLeftRadius: "6px",
                  borderBottomLeftRadius: "6px",
                },
                "& td:last-child": {
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                },
              }}
            >
              <TableCell sx={{ border: "none" }}>
                <Box display="flex" alignItems="center">
                  <img src={`/Images/Symbols/${row.Symbol}`} alt="" />
                  &nbsp;
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "12px",
                    }}
                  >
                    &nbsp;
                    {row.SymbolName}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: "right", border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.Price}
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "right", border: "none" }}>
                <Typography sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                  {row.Spread}
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "right", border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.Change}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
        <TableBody>
          {symbols.map((symbol: symbolsData, index: number) => (
            <SymbolTableRow key={index} SymbolData={symbol} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SymbolTable;
