import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFoodData,
  addFoodData,
  deleteFoodData,
} from "../utils/actions.js";
import { FoodCard } from "../component/Cards";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DNA } from "react-loader-spinner";
import { drawerWidth } from "../constant/Layout.js";

export const Foods = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);
  const loading = useSelector((state) => state.loading);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [input, setInput] = useState({
    name: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddFood = () => {
    dispatch(addFoodData(input));
    setInput({
      name: "",
      calories: "",
      protein: "",
      carbohydrates: "",
      fat: "",
    });
  };

  const deletedItem = (id) => {
    dispatch(deleteFoodData(id));
  };

  useEffect(() => {
    dispatch(fetchFoodData());
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
        Foods
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
          name="name"
          label="Name"
          variant="outlined"
          onChange={handleInput}
          value={input.name}
          size="small"
          fullWidth={isSmallScreen}
        />
        <TextField
          name="calories"
          label="Calories"
          variant="outlined"
          onChange={handleInput}
          value={input.calories}
          size="small"
          type="number"
          fullWidth={isSmallScreen}
        />
        <TextField
          type="number"
          name="protein"
          value={input.protein}
          label="Protein"
          onChange={handleInput}
          size="small"
          fullWidth={isSmallScreen}
        />
        <TextField
          type="number"
          name="carbohydrates"
          value={input.carbohydrates}
          label="Carbohydrates"
          onChange={handleInput}
          size="small"
          fullWidth={isSmallScreen}
        />
        <TextField
          type="number"
          name="fat"
          value={input.fat}
          label="Fat"
          onChange={handleInput}
          size="small"
          fullWidth={isSmallScreen}
        />
        <Button
          sx={{ background: "darkcyan" }}
          variant="contained"
          onClick={handleAddFood}
        >
          Save
        </Button>
      </Box>{" "}
      <FoodCard data={foods} onDelete={deletedItem} />
    </Box>
  );
};
