const usageReducer = (state, action) => {
    switch (action.type) {
      case 'Increment':
        return { ...state, value: state.value + 1 };
      case 'Decrement':
        return { ...state, value: state.value - 1 };
      case 'ChangeColor':
        return { ...state, color: action.payload };
      default:
        return state;
    }
  };
  
  export default usageReducer;
  