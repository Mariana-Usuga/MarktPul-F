/* eslint-disable*/
/* eslint-disable no-case-declarations */
/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
import {
  CREATE_PRODUCT,
  CREATE_MARKET,
  LOAD_PRODUCTS,
  LOAD_MARKETS,
  GET_ID_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_MARKET,
  MARKET_PRODUCTS,
  GET_PRODUCT,
  PATCH_MARKET,
  SHOW_LOADER,
  HIDE_LOADER,
  DELETE_MARKET,
} from '../types/productAndMarketTypes';

const initialState = {
  markets: { items: [], loaded: false },
  products: { items: [], loaded: false },
  idProduct: '',
  idMarket: '',
  marketProducts: [],
  isLoading: false,
};

const productAndMarketReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, products: { items: action.payload, loaded: true } };
    case LOAD_MARKETS:
      return { ...state, markets: { items: action.payload, loaded: true } };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: {
          items: [...state.markets.items, action.payload],
          loaded: true,
        },
      };
    case CREATE_MARKET:
      return {
        ...state,
        markets: {
          items: [...state.markets.items, action.payload],
          loaded: true,
        },
      };
    case UPDATE_PRODUCT: {
      const newData = state.products.items.map((el) =>
        el._id === action.payload.id ? action.payload : el,
      );
      return {
        ...state,
        markets: {
          items: newData,
          loaded: true,
        },
      };
    }
    case UPDATE_MARKET: {
      const newData = state.markets.items.map((el) => {
        if (el._id === action.payload._id) {
          return action.payload;
        }
        return el;
      });

      return {
        ...state,
        markets: {
          items: newData,
          loaded: true,
        },
      };
    }
    case MARKET_PRODUCTS:
      return { ...state, marketProducts: action.payload };
    case GET_ID_PRODUCT:
      return { ...state, idProduct: action.payload };
    case SHOW_LOADER:
    case HIDE_LOADER:
      return { ...state, isLoading: action.payload };
    case GET_PRODUCT:
      return { ...state, product: action.payload };
    case PATCH_MARKET:
      return { ...state, product: action.payload };
    case DELETE_MARKET: {
      const newData = state.markets.items.filter(
        (el) => el._id !== action.payload._id,
      );
      return {
        ...state,
        markets: {
          items: newData,
          loaded: true,
        },
      };
    }
    default:
      return state;
  }
};

export default productAndMarketReducer;
