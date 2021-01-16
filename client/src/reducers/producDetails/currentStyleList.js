export default currentStyleListReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_STYLE_LIST':
      return action.currentStyleList;
    default:
      return state;
  }
};
