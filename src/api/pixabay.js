import request from '../helpers/index';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '13272195-f2e241ea82ab8e0d07ff8d38f';

export const getMany = payload => request({
  url   : `${ API_URL }?key=${ API_KEY }&q=${ payload }&image_type=photo&orientation=horizontal&page=1&per_page=9`,
  method: 'GET'
});
