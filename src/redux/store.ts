import { Store, createStore, combineReducers, applyMiddleware } from "redux";
import { basketStateReducer, categoriesStateReducer, uiStateReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { IGlobalState, IGlobalAction } from './types';
import thunk from 'redux-thunk';


export function createGlobalStore(): Store<IGlobalState, IGlobalAction> {
  const rootReducer = combineReducers({
    uiState: uiStateReducer,
    categoriesState: categoriesStateReducer,
    basketState: basketStateReducer
  });
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
