import { types } from './actions';

const INIT = {
  items    : [],
  isLoading: false
};

const pixabayReducer = (state = INIT, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_IMAGES_START:
      return { items: [], isLoading: true };
    case types.FETCH_IMAGES_SUCCESS:
      return { items: payload, isLoading: false };
    case types.FETCH_IMAGES_FAIL:
      return INIT;
    default:
      return state;
  }
};

export default pixabayReducer;
