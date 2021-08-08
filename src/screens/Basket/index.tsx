import React from "react";
import { TitleBar } from "../../components/Titlebar/index";
import { IGlobalState } from "../../redux/types";
import { isDarkTheme } from "../../redux/selectors";
import { connect } from "react-redux";
import { LinkButton } from "../../components/Buttons/LinkButton/index";
import { useHistory } from "react-router-dom";
import CloseButton from "../../components/Buttons/CloseButton/index";
import "./style.css";
import { Product } from "../../models/product";

interface IBasketScreenProps {
  isDarkTheme?: boolean;
  products: Product[];
}

function mapStateToProps(state: IGlobalState): IBasketScreenProps {
  return {
    isDarkTheme: isDarkTheme(state),
    products: state.categoriesState.categories.flatMap((c) =>
      c.products.filter((p) => p.selected)
    ),
  };
}

function BasketScreen({ isDarkTheme, products }: IBasketScreenProps) {
  const history = useHistory();
  return (
    <div>
      <TitleBar
        title="Basket"
        className={isDarkTheme ? "--dark-mode" : "--light-mode"}
        closeBtn={<CloseButton onClick={() => history.push("/")} />}
      ></TitleBar>
      <div>
        {products.map((p) => (
          <p key={p.name}>{p.name}</p>
        ))}
      </div>
      <div className="action-bar">
        <LinkButton to="/">Order</LinkButton>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(BasketScreen);
