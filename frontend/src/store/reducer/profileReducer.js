const initialState = {};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MY_PROFILE": {
      return { ...action.payload };
    }
    default:
      return state;
  }
};
