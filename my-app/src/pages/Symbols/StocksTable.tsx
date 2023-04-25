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

import { stokeData } from "../../types/Dashboard/Symbol";

const sdata: stokeData[] = [
  {
    OpenTime: "Open Time",
    Symbol: "Symbol",
    Volume: "Volume",
    Side: "Side",
    OpenPrice: 1000,
    CurrentPrice: 2000,
    StopLoss: 1,
    TakeProfit: 1500,
    Swap: "Swap",
    Comission: 1500,
  },
  {
    OpenTime: "Open Time",
    Symbol: "Symbol",
    Volume: "Volume",
    Side: "Side",
    OpenPrice: 1000,
    CurrentPrice: 2000,
    StopLoss: 1,
    TakeProfit: 1500,
    Swap: "Swap",
    Comission: 1500,
  },
  {
    OpenTime: "Open Time",
    Symbol: "Symbol",
    Volume: "Volume",
    Side: "Side",
    OpenPrice: 1000,
    CurrentPrice: 2000,
    StopLoss: 1,
    TakeProfit: 1500,
    Swap: "Swap",
    Comission: 1500,
  },
  {
    OpenTime: "Open Time",
    Symbol: "Symbol",
    Volume: "Volume",
    Side: "Side",
    OpenPrice: 1000,
    CurrentPrice: 2000,
    StopLoss: 1,
    TakeProfit: 1500,
    Swap: "Swap",
    Comission: 1500,
  },

  {
    OpenTime: "Open Time",
    Symbol: "Symbol",
    Volume: "Volume",
    Side: "Side",
    OpenPrice: 1000,
    CurrentPrice: 2000,
    StopLoss: 1,
    TakeProfit: 1500,
    Swap: "Swap",
    Comission: 1500,
  },
];

const StocksTable = () => {
  return (
    <TableContainer>
      <Table
        style={{
          borderSpacing: "0px 5px",
          borderCollapse: "separate",
          border: "none",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: "none" }}>Open Time </TableCell>
            <TableCell sx={{ border: "none" }}>Symbol</TableCell>
            <TableCell sx={{ border: "none" }}>Volume</TableCell>
            <TableCell sx={{ border: "none" }}>Side</TableCell>
            <TableCell sx={{ border: "none" }}>Open Price </TableCell>
            <TableCell sx={{ border: "none" }}>Current Price</TableCell>
            <TableCell sx={{ border: "none" }}>Stop Loss</TableCell>
            <TableCell sx={{ border: "none" }}>Take Profit</TableCell>
            <TableCell sx={{ border: "none" }}>Swap</TableCell>
            <TableCell sx={{ border: "none" }}> Comission </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sdata.map((row, index) => (
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
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.OpenTime}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.Symbol}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.Volume}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.Side}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.OpenPrice}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.CurrentPrice}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.StopLoss}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.TakeProfit}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.Swap}
                </Typography>
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#D54C5A", fontSize: "12px" }}>
                  {row.Comission}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default StocksTable;
