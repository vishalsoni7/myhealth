import { Box, Grid, IconButton, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const DashBoardCards = (props) => {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Grid container spacing={2}>
        {props.data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Box
              sx={{
                padding: "1rem 0",
                boxShadow:
                  "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                width: "100%",
                height: "100%",
                textAlign: "center",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography component="h4" variant="h4">
                {item.title}
              </Typography>

              <Typography component="h5" variant="h5" fontWeight="bold">
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const ExerciseCard = ({ data, onDelete }) => {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item?._id}>
            <Box
              sx={{
                padding: "1rem",
                boxShadow:
                  "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography fontWeight="bold">Name: {item?.name}</Typography>{" "}
                <IconButton
                  color="inherit"
                  aria-label="trash"
                  edge="end"
                  onClick={() => onDelete(item?._id)}
                  sx={{ "&:hover": { color: "crimson" } }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>

              <Typography>Duration: {item?.duration} Minutes</Typography>
              <Typography>Burned Calories: {item?.caloriesBurned}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const FoodCard = ({ data, onDelete }) => {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item?._id}>
            <Box
              sx={{
                padding: "1rem",
                boxShadow:
                  "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography fontWeight="bold">Name: {item?.name}</Typography>
                <IconButton
                  color="inherit"
                  aria-label="trash"
                  edge="end"
                  onClick={() => onDelete(item?._id)}
                  sx={{ "&:hover": { color: "crimson" } }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
              >
                <Typography>Calories: {item?.calories}</Typography>
                <Typography>Protein: {item?.protein}</Typography>
                <Typography>Carbohydrates: {item?.carbohydrates}</Typography>
                <Typography>Fat: {item?.fat}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const GoalCard = ({ data, onDelete }) => {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item?._id}>
            <Box
              sx={{
                padding: "1rem",
                boxShadow:
                  "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography fontWeight="bold">Name: {item?.name}</Typography>
                <IconButton
                  color="inherit"
                  aria-label="trash"
                  edge="end"
                  onClick={() => onDelete(item?._id)}
                  sx={{ "&:hover": { color: "crimson" } }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
              >
                <Typography>Calories: {item?.calories}</Typography>
                <Typography>Description: {item?.description}</Typography>
                <Typography>Status: {item?.status}</Typography>{" "}
                <Typography>
                  Target Date: {new Date(item?.createdAt).toLocaleString()}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
