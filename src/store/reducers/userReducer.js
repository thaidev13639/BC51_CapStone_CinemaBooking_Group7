import { SET_INFO_USER } from "../types/setUserType";

const DEFAULT_STATE = {
  userInfo: null,
};
const string = localStorage.getItem("INFO_ACCOUNT");
if (string) {
  DEFAULT_STATE.userInfo = JSON.parse(string);
}
export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_INFO_USER: {
      state.userInfo = action.payload;
      console.log(state.userInfo);
      break;
    }
  }

  return { ...state };
};
