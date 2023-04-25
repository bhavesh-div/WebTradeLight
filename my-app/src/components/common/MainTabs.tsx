import { Box, Button } from "@mui/material";
import { useGetMediaQueryUp } from "../../hooks/useGetMediaQuery";

const MainTabs = ({
  tabData,
  value,
  handleChange,
}: {
  tabData: string[];

  value: number;
  handleChange: (value: number) => void;
}) => {
  const isMdup = useGetMediaQueryUp("md");

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
              width: isMdup ? "200px" : "100%",
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

export default MainTabs;
