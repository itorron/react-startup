import moment from 'moment';

const CACHE_EXPIRE_TIME_MILIS = 3600000; // 1 hour

function isValidCache(cacheDate) {
  return moment().diff(cacheDate) < CACHE_EXPIRE_TIME_MILIS;
}
export { isValidCache, CACHE_EXPIRE_TIME_MILIS };
