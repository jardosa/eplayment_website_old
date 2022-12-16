import { useReducer } from 'react';
import Context from './Context';
import { CHANGE_BACKTOP_COLOR, REACHED_FOOTER, reducer, REMOVE_NAV_SHADOW } from './reducer';

const GlobalState = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    reachedFooter: false,
    changeBackTopColor: false,
    removeNavShadow: false,
  });

  const reachedFooter = (payload) => dispatch({ type: REACHED_FOOTER, payload });
  const changeBackTopColor = (payload) => dispatch({ type: CHANGE_BACKTOP_COLOR, payload });
  const removeNavShadow = (payload) => dispatch({ type: REMOVE_NAV_SHADOW, payload });

  const initialState = {
    state,
    reachedFooter,
    changeBackTopColor,
    removeNavShadow,
  };

  return <Context.Provider value={{ ...initialState }}>{props.children}</Context.Provider>;
};

export default GlobalState;
