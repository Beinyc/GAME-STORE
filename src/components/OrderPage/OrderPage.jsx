import React from "react";
import './OrderPage.css';
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils";

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);

    if(items.lenght < 1 ){
        return <h1>Ваша корзина пуста</h1>
    }

    return (
          <div className="order-page">
            В процессе доработки
            {/* <div className="order-page__left">
                {items.map(game => <OrderPage game={game}/>)}
            </div>
            <div className="order-page__right">
                <div className="oreder-page__total-price">
                    <span>
                        {items.lenght} товаров на сумму {calcTotalPrice(items)} руб.
                    </span>
                </div>
            </div> */}
          </div>
      );
    }