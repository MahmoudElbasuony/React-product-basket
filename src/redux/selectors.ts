import { Selector } from "react-redux";
import { Theme } from "../models/enums";
import { IGlobalState } from './types';
import { Category } from '../models/category';

// Theme
export const isDarkTheme: Selector<IGlobalState, boolean> = state => state.uiState.theme === Theme.Dark;
export const getTheme: Selector<IGlobalState, Theme> = state => state.uiState.theme;

// Products
export const isProductsLoading: Selector<IGlobalState, boolean> = state => state.categoriesState.loading;
export const isProductsLoadFailed: Selector<IGlobalState, boolean> = state => state.categoriesState.hasError;
export const getCategories: Selector<IGlobalState, Category[]> = state => state.categoriesState.categories;



