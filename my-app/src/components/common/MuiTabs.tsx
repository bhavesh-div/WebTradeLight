import { Box, Button } from "@mui/material";

const MuiTabs = ({
  tabData,
  variant,
  value,
  handleChange,
}: {
  tabData: string[];
  variant: "standard" | "fullWidth";
  value: number;
  handleChange: (value: number) => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(25, 27, 32, 1)",
        borderRadius: "5px",
        overflow: "auto",
        p: 0.75,
        gap: 1,
      }}
    >
      {tabData &&
        tabData.map((tab, i) => (
          <Button
            key={i}
            sx={{
              whiteSpace: "nowrap",
              color: "white",
              flex: { xs: variant === "fullWidth" ? "1" : "auto", md: "1" },
              minWidth: "auto",
            }}
            variant={i === value ? "contained" : "text"}
            color="secondary"
            onClick={() => handleChange(i)}
          >
            {tab}
          </Button>
        ))}
    </Box>
  );
};

export default MuiTabs;
