import React from "react";
import { Product } from "../../../models/product";
import { ProductSection } from "../Product/index";
import "./style.css";
import { IGlobalState } from "../../../redux/types";
import { isDarkTheme } from "../../../redux/selectors";
import { connect } from "react-redux";

interface ICategorySectionProps {
  name: string;
  products: Product[];
  className?: string;
  onProductSelect?: (product: Product, isSelected: boolean) => void;
  readonly isDarkTheme: boolean;
}

function mergeStateToProp(state: IGlobalState) {
  return {
    isDarkTheme: isDarkTheme(state),
  };
}

function CategorySection({
  name,
  products = [],
  className = "",
  onProductSelect = () => {},
  isDarkTheme,
}: ICategorySectionProps) {
  
  const darkClass = isDarkTheme ? "category-section__content--dark" : "";
  return (
    <div className={["category-section", darkClass, className].join(" ")}>
      <p className="category-section__title">{name}</p>
      <div className="category-section__content">
        {products.map((p) => (
          <ProductSection
            key={p.name}
            product={p}
            selected={false}
            onSelect={(selectedProduct) =>
              onProductSelect(selectedProduct, true)
            }
            onUnSelect={(unselectedProduct) =>
              onProductSelect(unselectedProduct, false)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default connect(mergeStateToProp)(CategorySection);
