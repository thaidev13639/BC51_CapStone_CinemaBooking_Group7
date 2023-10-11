import { EDIT_FILM } from "../types/editFilm";

const DEFAULT_STATE = {
  filmInfo: null,
};

export const movieReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case EDIT_FILM: {
      state.filmInfo = action.payload;
      break;
    }
  }

  return { ...state };
};
