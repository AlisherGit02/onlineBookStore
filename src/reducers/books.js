const initialState = {
  isReady: false,
  items: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        items: action.payload,
        isReady: true,
      };
    case "SET_IS_READY":
      return {
        ...state,
        isReady: action.payload,
      };
      break;
    default:
      return state;
  }
};
