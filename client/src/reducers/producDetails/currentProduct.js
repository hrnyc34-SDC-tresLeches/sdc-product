export default changeProductReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return action.currentProduct;
    default:
      return state;
  }
};
