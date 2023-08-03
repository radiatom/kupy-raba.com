import React, { useEffect } from "react";
import "./Basket.scss";
import {
    basketDataBascetSelector,
    commodityTotalSelector,
} from "./BasketSelector";
import { useDispatch, useSelector } from "react-redux";
import Commodity from "./Commodity/Commodity";

const Basket = () => {
    const data = useSelector(basketDataBascetSelector);
    const total = useSelector(commodityTotalSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "total" });
    }, [data]);

    return (
        <div className="basket">
            {data !==null? (
                <div>
                    <h2>Корзина товарів:</h2>
                    {data.map((item) => {
                        return (
                            <Commodity
                                key={item.id}
                                item={item}
                                name={item.name}
                                number={item.number}
                                id={item.id}
                                totalPrice={item.totalPrice}
                            />
                        );
                    })}
                    <p className="basket__total">
                        Загальні ціна: {total + " грн."}
                    </p>
                    <button
                        className="basket__clean"
                        onClick={() => dispatch({ type: "clean" })}
                    >
                        Очистити
                    </button>
                </div>
            ) : (
                <h2 className="basket__empty">Кошик пустий</h2>
            )}
        </div>
    );
};

export default Basket;
