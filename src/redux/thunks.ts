import { Dispatch } from "redux";
import { onCategoriesLoadFailed, onFullFillCategoriesLoad, onStartLoadCategories } from './actions';

export const loadCategoriesAsync = (dispatch: Dispatch) => {
    dispatch(onStartLoadCategories());
    return fetch(`http://localhost:3000/data.json`)
        .then(resp => resp.json())
        .then(data => dispatch(onFullFillCategoriesLoad(data.productCategories)))
        .catch(error => dispatch(onCategoriesLoadFailed(error.error)));
}