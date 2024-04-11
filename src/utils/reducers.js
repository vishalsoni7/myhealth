const initialState = {
  exercises: [],
  foods: [],
  goals: [],
  loading: true,
  bg: false,
};

export const trackerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_BG_MODE":
      return {
        ...state,
        bg: !state.bg,
      };

    case "FETCH_EXERCISES_DATA":
      return {
        ...state,
        exercises: payload,
        loading: false,
      };

    case "FETCH_FOODS_DATA":
      return {
        ...state,
        foods: payload,
        loading: false,
      };

    case "FETCH_GOALS_DATA":
      return {
        ...state,
        goals: payload,
        loading: false,
      };

    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, payload],
      };

    case "ADD_FOOD":
      return {
        ...state,
        foods: [...state.foods, payload],
      };

    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, payload],
      };

    case "DELETE_EXERCISE":
      const updatedExercises = state.exercises.filter(
        (exercise) => exercise._id !== payload._id
      );

      return {
        ...state,
        exercises: updatedExercises,
      };

    case "DELETE_FOOD":
      const updatedFoods = state.foods.filter(
        (food) => food._id !== payload._id
      );

      return {
        ...state,
        foods: updatedFoods,
      };

    case "DELETE_GOAL":
      const updatedGoals = state.goals.filter(
        (goal) => goal._id !== payload._id
      );

      return {
        ...state,
        goals: updatedGoals,
      };

    default:
      return state;
  }
};
