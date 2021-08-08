import { IUiState, IUiAction, IBasketState, IBasketAction, ICategoriesState, ICategoryAction } from './types';
import { Theme } from '../models/enums';
import { ACTION_SET_THEME, ACTION_SELECT_PRODUCT, ACTION_UNSELECT_PRODUCT, ACTION_GO_TO_BASKET, ACTION_ORDER_PRODUCTS, ACTION_CATEGORIES_START_LOADING, ACTION_CATEGORIES_LOADED, ACTION_CATEGORIES_FAILED_LOAD } from './constants';

const INITIAL_UI_STATE: IUiState = {
  theme: Theme.Light
};

const INITIAL_CATEGORIES_STATE: ICategoriesState = {
  loading: false,
  hasError: false,
  categories: []
};

const INITIAL_BASKET_STATE: IBasketState = {
  products: []
};

export function uiStateReducer(state: IUiState = INITIAL_UI_STATE, action: IUiAction): IUiState {
  switch (action.type) {
    case ACTION_SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}

export function categoriesStateReducer(state: ICategoriesState = INITIAL_CATEGORIES_STATE, action: ICategoryAction) {
  switch (action.type) {
    case ACTION_SELECT_PRODUCT:
      if (action.payload.category && (action.payload.category?.products?.length || 0) !== 0) {
        const { category, product } = action.payload;
        const indx = category.products.findIndex(p => p === product);
        category.products.splice(indx, 1);
        category.products = [...category.products, { ...product, selected: true }];
      }
      return { ...state };
    case ACTION_UNSELECT_PRODUCT:
      if (action.payload.category && (action.payload.category?.products?.length || 0) !== 0) {
        const { category, product } = action.payload;
        const indx = category.products.findIndex(p => p === product);
        category.products.splice(indx, 1);
        category.products = [...category.products, { ...product, selected: false }];
      }
      return state;

    case ACTION_CATEGORIES_START_LOADING:
      return { ...state, loading: true, hasError: false, error: null };
    case ACTION_CATEGORIES_FAILED_LOAD:
      return { ...state, loading: false, hasError: false, error: action.payload.error };
    case ACTION_CATEGORIES_LOADED:
      return { ...state, categories: action.payload, loading: false, hasError: false, error: null };
    case ACTION_GO_TO_BASKET:
    default:
      return state;
  }
}



export function basketStateReducer(state: IBasketState = INITIAL_BASKET_STATE, action: IBasketAction) {
  switch (action.type) {
    case ACTION_ORDER_PRODUCTS:
      return { products: [] }; /// for now empty the backet items 
    default:
      return state;
  }
}
