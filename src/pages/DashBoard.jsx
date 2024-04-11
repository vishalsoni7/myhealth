import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExerciseData,
  fetchFoodData,
  fetchGoalData,
} from "../utils/actions.js";
import { DNA } from "react-loader-spinner";
import { Box, Typography } from "@mui/material";
import { DashBoardCards } from "../component/Cards";
import { drawerWidth } from "../constant/Layout.js";

export const DashBoard = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const foods = useSelector((state) => state.foods);
  const goals = useSelector((state) => state.goals);
  const loading = useSelector((state) => state.loading);

  const totalBurnedCalories = exercises?.reduce(
    (acc, curr) => curr.caloriesBurned + acc,
    0
  );

  const totalCaloriesConsumed = foods?.reduce(
    (acc, curr) => curr.calories + acc,
    0
  );

  const totalCaloriesGoal = goals?.reduce(
    (acc, curr) => curr.calories + acc,
    0
  );

  useEffect(() => {
    dispatch(fetchExerciseData());
    dispatch(fetchFoodData());
    dispatch(fetchGoalData());
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

  const data = [
    { title: "Calories Burned", value: totalBurnedCalories },
    { title: "Calories Consumed", value: totalCaloriesConsumed },
    { title: "Calories Goal", value: totalCaloriesGoal },
    {
      title: "Calories to Goal",
      value: totalCaloriesGoal - totalCaloriesConsumed,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: "38px",
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        fontWeight="900"
        className="landing-heading"
      >
        See more of <br />
        yourself in Health.
      </Typography>
      <DashBoardCards data={data} />
    </Box>
  );
};
