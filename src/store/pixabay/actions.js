export const types = {
  FETCH_IMAGES_START  : 'FETCH_IMAGES_START',
  FETCH_IMAGES_SUCCESS: 'FETCH_IMAGES_SUCCESS',
  FETCH_IMAGES_FAIL   : 'FETCH_IMAGES_FAIL'
};

export const fetchImagesStart = payload => ({
  type: types.FETCH_IMAGES_START,
  payload
});

export const fetchImagesSuccess = payload => ({
  type: types.FETCH_IMAGES_SUCCESS,
  payload
});

export const fetchImagesFail = payload => ({
  type: types.FETCH_IMAGES_FAIL,
  payload
});
