import React, { useEffect } from "react";
import { TitleBar } from "../../components/Titlebar/index";
import CloseButton from "../../components/Buttons/CloseButton/index";
import {
  isDarkTheme,
  isProductsLoading,
  isProductsLoadFailed,
} from "../../redux/selectors";
import { IGlobalState } from "../../redux/types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { LinkButton } from "../../components/Buttons/LinkButton";
import { Loader } from "../../components/Loader";
import { getCategories } from "../../redux/selectors";
import { Dispatch } from "redux";
import { selectProduct, unselectProduct } from "../../redux/actions";
import "./style.css";
import { Category } from "../../models/category";
import { loadCategoriesAsync } from "../../redux/thunks";
import CategorySection from "./Category/index";
import { Product } from "../../models/product";
interface IProductScreenStateProps {
  isDarkTheme?: boolean;
  isLoading?: boolean;
  isLoadingFailed?: boolean;
  categories?: Category[];
}

interface IProductScreenProps extends IProductScreenStateProps {}

interface IProductScreenDispatchProps {
  loadCategories: () => void;
  selectProduct?: (
    category: Category,
    product: Product,
    iSelected: boolean
  ) => void;
}

interface IProductScreenProps
  extends IProductScreenStateProps,
    IProductScreenDispatchProps {}

function mapStateToProps(state: IGlobalState): IProductScreenStateProps {
  return {
    isDarkTheme: isDarkTheme(state),
    isLoading: isProductsLoading(state),
    isLoadingFailed: isProductsLoadFailed(state),
    categories: getCategories(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): IProductScreenDispatchProps {
  return {
    loadCategories() {
      loadCategoriesAsync(dispatch);
    },
    selectProduct(category, product, iSelected) {
      if (iSelected) dispatch(selectProduct(category, product));
      else dispatch(unselectProduct(category, product));
    },
  };
}

function ProductScreen({
  isDarkTheme,
  isLoading,
  isLoadingFailed,
  categories,
  loadCategories,
  selectProduct = () => {},
}: IProductScreenProps) {
  const history = useHistory();

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div className="products-container">
      <TitleBar
        title="Products"
        className={isDarkTheme ? "--dark-mode" : "--light-mode"}
        closeBtn={() => <CloseButton onClick={() => history.push("/")} />}
      ></TitleBar>

      <div className="products-container__content">
        {isLoading && !isLoadingFailed && <Loader />}

        {(categories?.length || 0) === 0 && (
          <p className="products-container__no-categories">No Categories</p>
        )}

        {categories?.map((c) => (
          <CategorySection
            key={c.name}
            name={c.name}
            products={c.products}
            onProductSelect={(p, isSelected) => selectProduct(c, p, isSelected)}
          />
        ))}
      </div>

      <div className="action-bar">
        {!isLoading && !isLoadingFailed && (
          <LinkButton to="/basket">Basket</LinkButton>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
