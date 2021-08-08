import React from "react";
import { Route } from "react-router-dom";

const ProductsScreen = React.lazy(() => import("./screens/Categories"));
const BasketScreen = React.lazy(() => import("./screens/Basket"));

const ProductRoutes = [
  <Route key="products_screen" path="/products" component={ProductsScreen} />,
  <Route key="basket_screen" path="/basket" component={BasketScreen} />,
];

export const AppRoutes = [...ProductRoutes];
