import React, { useState } from "react";
import { Product } from "../../../models/product";
import "./style.css";
import DefaultCheckBox from "../../../components/Checkboxs/DefaultCheckBox/index";
import { getBillingFrequencyText } from "../../../utils/currency";

interface IProductSectionProps {
  product: Product;
  selected: boolean;
  className?: string;
  readonly onSelect?: (product: Product) => void;
  readonly onUnSelect?: (product: Product) => void;
}

export function ProductSection({
  product,
  selected,
  className = "",
  onSelect = () => {},
  onUnSelect = () => {},
}: IProductSectionProps) {
  const prices = product.price || [];
  prices.sort((a, b) => a.periodStart - b.periodStart);
  const [price1, price2] = prices;
  const billingFrequency1Text = getBillingFrequencyText(
    price1.billingFrequency
  );
  const billingFrequency2Text = getBillingFrequencyText(
    price2?.billingFrequency
  );
  
  const [checked, setChecked] = useState(selected);

  return (
    <div className={["product-section", className].join(" ")}>
      <p>
        <DefaultCheckBox
          checked={checked}
          onCheck={(isSelect) =>{
            isSelect ? onSelect(product) : onUnSelect(product);
            setChecked(isSelect);
          }}
        >
          {product.name}
        </DefaultCheckBox>
      </p>
      <p className="product-section__description">{product.description}</p>
      <b>
        {price1.amount} € {billingFrequency1Text}
      </b>
      {price2 && (
        <p className="product-section__previous-price">
          {" "}
          From {price2.periodStart} Month {price2.amount} €{" "}
          {billingFrequency2Text}{" "}
        </p>
      )}
    </div>
  );
}
