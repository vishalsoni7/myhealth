import axios from "axios";
import toast from "react-hot-toast";

export const toggleBgMode = () => {
  return {
    type: "TOGGLE_BG_MODE",
  };
};

const base_url = "https://healthtracker-backend-v2.vercel.app";

// fetch
export const fetchExerciseData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/exercises`);
    const data = response.data.allExercises;
    dispatch({ type: "FETCH_EXERCISES_DATA", payload: data });
  } catch (error) {
    console.error("Error while fetching exercise data.", error.code);
  }
};

export const fetchFoodData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/foods`);
    const data = response.data.allFoods;
    dispatch({ type: "FETCH_FOODS_DATA", payload: data });
  } catch (error) {
    console.error("error while fetching food data.", error.code);
  }
};

export const fetchGoalData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/goals`);
    const data = response.data.allGoals;
    dispatch({ type: "FETCH_GOALS_DATA", payload: data });
  } catch (error) {
    console.error("error while fetching goal data.", error.code);
  }
};

// add
export const addExerciseData = (exerciseData) => async (dispatch) => {
  try {
    const promise = axios.post(`${base_url}/exercises`, exerciseData);
    toast.promise(promise, {
      loading: "Adding exercise...",
      success: <b>Exercise added successfully!</b>,
      error: <b>Something went wrong!</b>,
    });

    const response = await promise;
    const data = response.data.exerciseToBeAdded;
    dispatch({ type: "ADD_EXERCISE", payload: data });
  } catch (error) {
    console.error("Error while adding exercise data.", error.code);
  }
};

export const addFoodData = (foodData) => async (dispatch) => {
  try {
    const promise = axios.post(`${base_url}/foods`, foodData);
    toast.promise(promise, {
      loading: "Adding food...",
      success: <b>Food added successfully!</b>,
      error: <b>Something went wrong!</b>,
    });

    const response = await promise;
    const data = response.data.newFood;
    dispatch({ type: "ADD_FOOD", payload: data });
  } catch (error) {
    console.error("Error while adding food data.", error.code);
  }
};

export const addGoalData = (goalData) => async (dispatch) => {
  try {
    const promise = axios.post(`${base_url}/goals`, goalData);
    toast.promise(promise, {
      loading: "Adding goal...",
      success: <b>Goal added successfully!</b>,
      error: <b>Something went wrong!</b>,
    });

    const response = await promise;
    const data = response.data.newGoal;
    dispatch({ type: "ADD_GOAL", payload: data });
  } catch (error) {
    console.error("Error while adding goal data.", error.code);
  }
};

// delete
export const deleteExerciseData = (id) => async (dispatch) => {
  try {
    const promise = axios.delete(`${base_url}/exercises/${id}`);
    toast.promise(promise, {
      loading: "Deleting exercise...",
      success: <b>Exercise deleted successfully!</b>,
      error: <b>Something went wrong!</b>,
    });

    const response = await promise;
    const data = response.data.deletedExercise;
    dispatch({ type: "DELETE_EXERCISE", payload: data });
  } catch (error) {
    console.error("Error while deleting exercise.", error.code);
  }
};

export const deleteFoodData = (id) => async (dispatch) => {
  try {
    const promise = axios.delete(`${base_url}/foods/${id}`);
    toast.promise(promise, {
      loading: "Deleting food...",
      success: <b>Food deleted successfully!</b>,
      error: <b>Something went wrong!</b>,
    });

    const response = await promise;
    const data = response.data.deletedFood;
    dispatch({ type: "DELETE_FOOD", payload: data });
  } catch (error) {
    console.error("Error while deleting food.", error.code);
  }
};

export const deleteGoalData = (id) => async (dispatch) => {
  try {
    const promise = axios.delete(`${base_url}/goals/${id}`);
    toast.promise(promise, {
      loading: "Deleting goal...",
      success: <b>Goal deleted successfully!</b>,
      error: <b>Something went wrong!</b>,
    });

    const response = await promise;
    const data = response.data.deletedGoal;
    dispatch({ type: "DELETE_GOAL", payload: data });
  } catch (error) {
    console.error("Error while deleting goal.", error.code);
  }
};
