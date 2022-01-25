/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
const getMarketFilter = (markets, search = '') => {
  if (search === '') {
    return markets;
  }
  const nameMinuscula = search.toLowerCase();
  return markets.filter((market) =>
    market.title.toLowerCase().includes(nameMinuscula),
  );
};
export default getMarketFilter;
