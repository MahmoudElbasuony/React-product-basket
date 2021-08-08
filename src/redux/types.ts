import { Theme } from "../models/enums";
import { ACTION_SELECT_PRODUCT, ACTION_UNSELECT_PRODUCT, ACTION_GO_TO_BASKET, ACTION_ORDER_PRODUCTS, ACTION_CATEGORIES_LOADED, ACTION_CATEGORIES_START_LOADING, ACTION_CATEGORIES_FAILED_LOAD } from './constants';
import { Category } from '../models/category';
import { Product } from '../models/product';

// UI actions interfaces
export interface ISetThemeAction {
  type: string;
  payload: Theme;
}

// Products screen actions interfaces
export interface ICategoriesLoadedAction {
  type: typeof ACTION_CATEGORIES_LOADED;
  payload: Category[];
}

export interface ICategoriesLoadingStartAction {
  type: typeof ACTION_CATEGORIES_START_LOADING;
}

export interface ICategoriesLoadingFailedAction {
  type: typeof ACTION_CATEGORIES_FAILED_LOAD;
  payload: {
    error: string
  }
}


export interface ISelectProductAction {
  type: typeof ACTION_SELECT_PRODUCT;
  payload: { product: Product, category: Category };
}
export interface IUnSelectProductAction {
  type: typeof ACTION_UNSELECT_PRODUCT;
  payload: { product: Product, category: Category };
}
export interface IGoToBasketAction {
  type: typeof ACTION_GO_TO_BASKET;
}

// Basket screen actions interfaces
export interface IOrderProductsAction {
  type: typeof ACTION_ORDER_PRODUCTS;
  payload: Product[]
}


/// Mappers 
export interface IThemeTogglerStateProps {
  isDarkTheme: boolean
}

export interface IThemeTogglerDispatchProps {
  setTheme: (theme: Theme) => void;
}


// Actions exports
export type IUiAction = ISetThemeAction;
export type ICategoryAction = ICategoriesLoadingStartAction | ICategoriesLoadingFailedAction | ICategoriesLoadedAction | ISelectProductAction | IUnSelectProductAction | IGoToBasketAction;
export type IBasketAction = IOrderProductsAction;
export type IGlobalAction = IUiAction | ICategoryAction | IBasketAction;


// State exports
export type IUiState = {
  theme: Theme;
};

export type IBasketState = {
  products: Product[]
};

export type ICategoriesState = {
  loading: boolean,
  hasError: boolean,
  categories: Category[],
};

export type IGlobalState = {
  uiState: IUiState;
  categoriesState: ICategoriesState,

  basketState: IBasketState
};
