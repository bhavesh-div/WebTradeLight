import {
  TableRow,
  TableCell,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import { symbolsData } from "../../types/Dashboard/Symbol";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
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
    setTradeValue((tradeValue += 1));
    console.log(tradeValue);
  };
  const handleSubValue = () => {
    setTradeValue((tradeValue -= 1));
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
          backgroundColor: "#191b20",
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
            <img src={`/Images/Symbols/${SymbolData.Symbol}`} alt="" />
            <Typography variant="h6">{SymbolData.SymbolName}</Typography>
          </Box>
        </TableCell>
        <TableCell align="center">
          {open ? (
            <Box display="flex" gap="5px">
              <Button
                variant="outlined"
                color="info"
                sx={{ width: "20px" }}
                size="small"
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  fontSize="8px"
                >
                  <InfoIcon sx={{ height: "15px" }} />
                  Info
                </Typography>
              </Button>
              <Button
                variant="outlined"
                color="info"
                sx={{ width: "50px", padding: "10px 40px", height: "30px" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  fontSize="8px"
                >
                  <AddRoundedIcon sx={{ height: "15px" }} />
                  Create Order
                </Typography>
              </Button>
            </Box>
          ) : (
            <Typography color="text.danger" variant="h6">
              {SymbolData.Price}
            </Typography>
          )}
        </TableCell>
        <TableCell align="right">
          <Typography variant="h6">{SymbolData.Spread}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography color="text.danger" variant="h6">
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
          <TableCell sx={{ display: "flex", gap: 1, width: "100%" }}>
            <Box display="flex" flex="1" minWidth={"123px"} width="100%">
              <Button
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "100px",
                  height: "36px",
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
            <Box display="flex" flexDirection="column" width="60%">
              <Box
                sx={{
                  border: "1px solid ",
                  borderColor: "#525969",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {tradeValue}
              </Box>
              <Box display="flex">
                <Button
                  variant="outlined"
                  onClick={handleSubValue}
                  sx={{
                    borderRadius: "0px",
                    width: "30px",
                    height: "30px",
                    borderColor: "#525969",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: "#41495A",
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
                    width: "30px",
                    height: "30px",
                    borderBottomRightRadius: "7px",
                    borderColor: "#525969",
                    backgroundColor: "#41495A",
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
                  flex: "1",
                  width: "100px",
                  height: "36px",
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
