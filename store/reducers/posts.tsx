const initialState = {
  isLoaded: false,
  data: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        isLoaded: true,
        data: [...state.data, action.payload],
      };
    case "FETCH_POSTS":
      return {
        isLoaded: true,
        data: [...action.payload],
      };
    default:
      return state;
  }
};

export default postsReducer;
