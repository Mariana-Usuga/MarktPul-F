/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
const getMarketFilter = (markets, search = '') => {
  if (search === '') {
    return markets;
  }
  const name = search.toLowerCase();
  return markets.filter((market) => market.title.toLowerCase().includes(name));
};
export default getMarketFilter;
