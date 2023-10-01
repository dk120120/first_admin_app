export const INITIAL_STATE = {
  darkTheme: false,
};

export const All_ACTION = {
  DARK_ACTION: "DARK_ACTION",
  WHITE_ACTION: "WHITE_ACTION",
  TOGGLE_ACTION: "TOGGLE_ACTION",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case All_ACTION.DARK_ACTION:
      return {
        darkTheme: true,
      };

    case All_ACTION.WHITE_ACTION:
      return {
        darkTheme: false,
      };

    case All_ACTION.TOGGLE_ACTION:
      return {
        darkTheme: !(state.darkTheme) 
      };

    default:
      return state;
  }
}


