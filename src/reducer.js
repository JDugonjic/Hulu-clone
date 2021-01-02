export const initialState = {
  _movie: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_MOVIE":
      return {
        ...state,
        _movie: action._movie,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.selectedCategory,
      };
    default:
      return state;
  }
};

export default reducer;
