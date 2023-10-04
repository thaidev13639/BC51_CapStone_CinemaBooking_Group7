const { SET_INFO_USER } = require("../types/setUserType");

export const loginAction = (data) => {
  return {
    type: SET_INFO_USER,
    payload: data,
  };
};
