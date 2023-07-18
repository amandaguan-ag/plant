// This function stores our state.
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// This is a function factory.
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

// We create three functions using our function factory.
const hydrate = changeState("water")(1);
const feed = changeState("soil")(1);
const giveLight = changeState("light")(1);

export { storeState, hydrate, feed, giveLight };
