import { ISetThemeAction, ISelectProductAction, IUnSelectProductAction, IOrderProductsAction, IGoToBasketAction, ICategoriesLoadingStartAction, ICategoriesLoadedAction, ICategoriesLoadingFailedAction } from './types';
import { ACTION_SET_THEME, ACTION_SELECT_PRODUCT, ACTION_UNSELECT_PRODUCT, ACTION_ORDER_PRODUCTS, ACTION_GO_TO_BASKET, ACTION_CATEGORIES_START_LOADING, ACTION_CATEGORIES_LOADED, ACTION_CATEGORIES_FAILED_LOAD } from './constants';
import { Theme } from '../models/enums';
import { Product } from '../models/product';
import { Category } from '../models/category';

export function setTheme(theme: Theme): ISetThemeAction {
  return {
    type: ACTION_SET_THEME,
    payload: theme
  };
}


// Products screen actions
export function onStartLoadCategories(): ICategoriesLoadingStartAction {
  return {
    type: ACTION_CATEGORIES_START_LOADING,
  };
}

export function onFullFillCategoriesLoad(categories: Category[]): ICategoriesLoadedAction {
  return {
    type: ACTION_CATEGORIES_LOADED,
    payload: categories
  };
}

export function onCategoriesLoadFailed(error: string): ICategoriesLoadingFailedAction {
  return {
    type: ACTION_CATEGORIES_FAILED_LOAD,
    payload: { error }
  };
}


export function selectProduct(category: Category, product: Product): ISelectProductAction {
  return {
    type: ACTION_SELECT_PRODUCT,
    payload: { product, category }
  };
}

export function unselectProduct(category: Category, product: Product): IUnSelectProductAction {
  return {
    type: ACTION_UNSELECT_PRODUCT,
    payload: { product, category }
  };
}

export function goToBasketProduct(product: Product): IGoToBasketAction {
  return {
    type: ACTION_GO_TO_BASKET,
  };
}

// Basket screen actions
export function orderProducts(products: Product[]): IOrderProductsAction {
  return {
    type: ACTION_ORDER_PRODUCTS,
    payload: products
  };
}
