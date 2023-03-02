const initialState = {
  searchQuery: "",
  filterBy: "all",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};
