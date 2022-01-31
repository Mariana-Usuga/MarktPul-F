/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
export const getMarketFilter = (markets, search = '') => {
  if (search === '') {
    return markets;
  }
  const name = search.toLowerCase();
  return markets.filter((market) => market.title.toLowerCase().includes(name));
};
export const getProductFilter = (products, search = '') => {
  if (search === '') {
    return products;
  }
  const name = search.toLowerCase();
  return products.filter((product) =>
    product.title.toLowerCase().includes(name),
  );
};
