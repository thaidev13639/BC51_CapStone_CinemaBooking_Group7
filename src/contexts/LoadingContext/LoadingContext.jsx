import { createContext, useState } from "react";
import "./style.scss";


const DEFAULT_STATE = {
  isLoading: true,
};

export const LoadingContext = createContext(DEFAULT_STATE);
export const LoadingProvider = (props) => {
  const [state, setState] = useState(DEFAULT_STATE);

  document.querySelector("body").style.overflow = state.isLoading ? "hidden" : 'unset';

  return (
    <LoadingContext.Provider value={[state, setState]}>
      
      {state.isLoading && (
        <div className="wrapper-spin">
          <div className="loadingio-spinner-spinner-c5cyy9uzkj7">
            <div className="ldio-7y2d2dwt8dm">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      )}


      {props.children}
    </LoadingContext.Provider>
  );
};
