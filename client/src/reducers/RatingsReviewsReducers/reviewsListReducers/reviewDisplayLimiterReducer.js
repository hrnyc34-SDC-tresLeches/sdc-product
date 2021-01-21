import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const reviewDisplayLimiterReducer = (state = 2, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_DISPLAY_LIMITER:
    return action.payload.reviewDisplayLimiter;
  default:
    return state;
  }
};

export default reviewDisplayLimiterReducer;