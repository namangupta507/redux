const initialState = 0;

const IncDec = (state = initialState, action) => {
  switch (action.type) {
    case "INCREEMENT":
      return state + 1;
    case "DECREEMENT":
      return state - 1;
    default:
      return state;
  }
};

export default IncDec;
