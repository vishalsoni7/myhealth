import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExerciseData,
  addExerciseData,
  deleteExerciseData,
} from "../utils/actions.js";

import { ExerciseCard } from "../component/Cards";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DNA } from "react-loader-spinner";
import { drawerWidth } from "../constant/Layout.js";
// import { useTheme, useMediaQuery } from "@material-ui/core";

export const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const loading = useSelector((state) => state.loading);
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [input, setInput] = useState({
    name: "",
    duration: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddExercise = () => {
    dispatch(addExerciseData(input));
    setInput({
      name: "",
      duration: "",
    });
  };

  const deletedItem = (id) => {
    dispatch(deleteExerciseData(id));
  };

  useEffect(() => {
    dispatch(fetchExerciseData());
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: `calc(100vh - ${drawerWidth}px)`,
        }}
      >
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      </Box>
    );
  }

  return (
    <Box sx={{ height: `100%` }}>
      <Typography variant="h4" component="h4">
        Exercises
      </Typography>{" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          margin: "18px 0 28px 0",
          gap: "16px",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          onChange={handleInput}
          value={input.name}
          size="small"
          // fullWidth={isSmallScreen}
        />
        <TextField
          name="duration"
          label="Duration"
          variant="outlined"
          onChange={handleInput}
          value={input.duration}
          type="number"
          size="small"
          // fullWidth={isSmallScreen}
        />
        <Button
          sx={{
            background: "darkcyan",
            alignSelf: { xs: "flex-start", sm: "center" },
          }}
          variant="contained"
          onClick={handleAddExercise}
        >
          Save
        </Button>
      </Box>{" "}
      <ExerciseCard data={exercises} onDelete={deletedItem} />
    </Box>
  );
};
