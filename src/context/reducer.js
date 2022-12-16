export const REACHED_FOOTER = 'REACHED_FOOTER';
export const CHANGE_BACKTOP_COLOR = 'CHANGE_BACKTOP_COLOR';
export const REMOVE_NAV_SHADOW = 'REMOVE_NAV_SHADOW';

const reachedFooter = (state, payload) => {
  return { ...state, reachedFooter: payload };
};

const changeBackTopColor = (state, payload) => {
  return { ...state, changeBackTopColor: payload };
};
const removeNavShadow = (state, payload) => {
  return { ...state, removeNavShadow: payload };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case REACHED_FOOTER:
      return reachedFooter(state, action.payload);
    case CHANGE_BACKTOP_COLOR:
      return changeBackTopColor(state, action.payload);
    case REMOVE_NAV_SHADOW:
      return removeNavShadow(state, action.payload);
    default:
      return state;
  }
};
