import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGoalData,
  addGoalData,
  deleteGoalData,
} from "../utils/actions.js";
import { GoalCard } from "../component/Cards";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DNA } from "react-loader-spinner";
import { drawerWidth } from "../constant/Layout.js";

export const Goals = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);
  const loading = useSelector((state) => state.loading);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [input, setInput] = useState({
    name: "",
    description: "",
    createdAt: "",
    calories: "",
    status: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddGoal = () => {
    dispatch(addGoalData(input));
    setInput({
      name: "",
      description: "",
      createdAt: "",
      calories: "",
      status: "",
    });
  };

  const deletedItem = (id) => {
    dispatch(deleteGoalData(id));
  };

  useEffect(() => {
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

  return (
    <Box sx={{ height: `50%` }}>
      <Typography variant="h4" component="h4">
        Goals
      </Typography>
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
          type="text"
          name="name"
          value={input.name}
          label="Name"
          onChange={handleInput}
          size="small"
          fullWidth={isSmallScreen}
        />

        <TextField
          type="text"
          name="description"
          value={input.description}
          label="Description"
          onChange={handleInput}
          size="small"
          fullWidth={isSmallScreen}
        />

        <TextField
          type="date"
          name="createdAt"
          value={input.createdAt}
          onChange={handleInput}
          size="small"
          fullWidth={isSmallScreen}
        />

        <TextField
          type="number"
          name="calories"
          value={input.calories}
          label="Calories"
          onChange={handleInput}
          size="small"
          fullWidth={isSmallScreen}
        />

        <FormControl
          size="small"
          sx={{ width: !isSmallScreen ? 140 : null }}
          fullWidth={isSmallScreen}
        >
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={input.status}
            label="Status"
            onChange={handleInput}
          >
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Achieved">Achieved</MenuItem>
            <MenuItem value="Abandoned">Abandoned</MenuItem>
          </Select>
        </FormControl>

        <Button
          sx={{ background: "darkcyan" }}
          variant="contained"
          onClick={handleAddGoal}
        >
          Save
        </Button>
      </Box>{" "}
      <GoalCard data={goals} onDelete={deletedItem} />
    </Box>
  );
};
