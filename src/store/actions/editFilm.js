import { EDIT_FILM } from "../types/editFilm";

export const getFilmAction = (data) => {
  return {
    type: EDIT_FILM,
    payload: data,
  };
};
