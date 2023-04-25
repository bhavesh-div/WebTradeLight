import { Box, Grid } from "@mui/material";
import CopyTradeSymbol from "./CopyTradeSymbol";

const CopyTrade = () => {
  return (
    <Box sx={{ margin: "10px", marginTop: "15px" }}>
      <Grid container>
        <Grid item xs={12}>
          <CopyTradeSymbol />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CopyTrade;
