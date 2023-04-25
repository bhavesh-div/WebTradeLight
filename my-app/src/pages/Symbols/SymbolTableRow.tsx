import {
  TableRow,
  TableCell,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { symbolsData } from "../../types/Dashboard/Symbol";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
const SymbolTableRow = ({ SymbolData }: { SymbolData: symbolsData }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  let [tradeValue, setTradeValue] = useState(0);
  const handleAddValue = () => {
    setTradeValue((tradeValue += 0.1));
    console.log(tradeValue);
  };
  const handleSubValue = () => {
    setTradeValue((tradeValue -= 0.1));
    console.log(tradeValue);
  };
  return (
    <>
      <TableRow
        onClick={handleClick}
        key={SymbolData.SymbolName}
        sx={{
          "& .MuiTableCell-root": {
            borderBottom: "none",
            px: 0.5,
            py: 1.5,
            cursor: "pointer",
          },
          backgroundColor: "primary.main",
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
        <TableCell>
          <Box display="flex" alignItems="center">
            {/* <img src={`/Images/Symbols/${SymbolData.Symbol}`} alt="" /> */}H
            <Typography>{SymbolData.SymbolName}</Typography>
          </Box>
        </TableCell>
        <TableCell align="center">
          {open ? (
            <Box display="flex" gap="5px">
              <Button variant="outlined" color="info">
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  fontSize="14px"
                >
                  <InfoIcon sx={{ height: "16px" }} />
                  Info
                </Typography>
              </Button>
              <Button variant="outlined" color="info">
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  fontSize="14px"
                >
                  <AddRoundedIcon sx={{ height: "18px" }} />
                  Create Order
                </Typography>
              </Button>
            </Box>
          ) : (
            <Typography color="text.danger">{SymbolData.Price}</Typography>
          )}
        </TableCell>
        <TableCell align="right">
          <Typography>{SymbolData.Spread}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography color="text.danger">
            -{SymbolData.Change.toFixed(2)}%
          </Typography>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow
          sx={{
            "& .MuiTableCell-root": {
              borderBottom: "none",
              py: 1.5,
            },
            backgroundColor: "primary.main",
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
          <TableCell sx={{ display: "flex", gap: 1.5, width: "100%" }}>
            <Box display="flex" flex="1" minWidth={"123px"} width="100%">
              <Button
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "100%",
                  flex: "1",
                }}
                variant="contained"
                color="error"
              >
                <Typography fontSize="8px" color="rgba(251, 251, 251, 0.75)">
                  Low:{SymbolData.Price}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography fontSize="8px">Sell</Typography>
                  <Typography>{SymbolData.Price}</Typography>
                </Box>
              </Button>
            </Box>
          </TableCell>
          <TableCell>
            <Box display="flex" flexDirection="column" width="100%">
              <Box
                sx={{
                  border: "1px solid ",
                  borderColor: "#525969",
                  display: "flex",
                  justifyContent: "center",
                  py: 0.525,
                }}
              >
                {tradeValue}
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="outlined"
                  onClick={handleSubValue}
                  sx={{
                    borderRadius: "0px",
                    width: "100%",
                    borderColor: "#525969",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: "#41495A",
                    borderTop: "none",
                    borderRight: "none",
                  }}
                >
                  <RemoveRoundedIcon sx={{ height: "9.42px" }} />
                </Button>
                <Divider orientation="vertical" sx={{ bgColor: "#545B6B" }} />
                <Button
                  variant="outlined"
                  onClick={handleAddValue}
                  sx={{
                    borderRadius: "0px",
                    width: "100%",
                    borderBottomRightRadius: "7px",
                    borderColor: "#525969",
                    backgroundColor: "#41495A",
                    borderTop: "none",
                    borderLeft: "none",
                  }}
                >
                  <AddRoundedIcon sx={{ height: "9.42px" }} />
                </Button>
              </Box>
            </Box>
          </TableCell>
          <TableCell colSpan={2}>
            <Box
              display="flex"
              flex="1"
              minWidth={"125px"}
              width="100%"
              gap="20px"
              justifyContent={"space-around"}
            >
              <Button
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "100%",
                  flex: "1",
                }}
                variant="contained"
                color="success"
              >
                <Typography fontSize="8px" color="rgba(251, 251, 251, 0.75)">
                  High:{SymbolData.Price}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Typography fontSize="8px">High</Typography>
                  <Typography>{SymbolData.Price}</Typography>
                </Box>
              </Button>
            </Box>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default SymbolTableRow;
