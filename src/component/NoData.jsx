import { Box, Typography } from "@mui/material";

const NoData = ({ loading, text, data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        border: "1px solid",
      }}
    >
      <Typography variant="h4" component="h4" color="GrayText">
        {!loading && data.length === 0 ? `No${text}!` : null}
      </Typography>
    </Box>
  );
};

export default NoData;
