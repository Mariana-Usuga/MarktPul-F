import {
  LOAD_MARKETS_FILTER,
  LOAD_PRODUCTS_FILTER,
  LOAD_SEARCH_QUERY,
} from '../types/SearchTypes';
import { getMarketFilter, getProductFilter } from '../services/SearchServices';

export const loadMarketsFilter = (markets) => ({
  type: LOAD_MARKETS_FILTER,
  payload: markets,
});
export const loadProductsFilter = (products) => ({
  type: LOAD_PRODUCTS_FILTER,
  payload: products,
});
export const loadSearchQuery = (search) => ({
  type: LOAD_SEARCH_QUERY,
  payload: search,
});
export const fetchMarketFilter = (markets, search) => (dispatch) => {
  const marketFilter = getMarketFilter(markets, search);
  dispatch(loadMarketsFilter(marketFilter));
};
export const fetchProductFilter = (products, search) => (dispatch) => {
  const productFilter = getProductFilter(products, search);
  dispatch(loadProductsFilter(productFilter));
};
