import { GET_USER, USER_LOGIN, USER_LOGOUT } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      const token = action.payload;
      localStorage.setItem("token", token);
      return { ...state, token: token };
    }
    case GET_USER: {
      const user = action.payload;
      return { ...state, user: user };
    }
    case USER_LOGOUT: {
      localStorage.clear();
      let state = { ...initialState };
      return state;
    }
    default:
      return state;
  }
};
