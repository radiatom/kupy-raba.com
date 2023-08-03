import React, { useEffect } from "react";
import "./Commodity.scss";
import { useDispatch } from "react-redux";

const Commodity = ({ name,number ,id,totalPrice}) => {
    const dispatch = useDispatch();
    return (
        <div className="commodity">
            <h3 className="commodity__name">{name}</h3>
            <h3 className="commodity__number">Шт: {number}</h3>
            <button className="commodity__btn" onClick={() => dispatch({ type: "addNumber", id: id })}>
                +
            </button>
            <button className="commodity__btn" onClick={() => dispatch({ type: "deleteNumber", id: id })}>
                -
            </button>
            <p className="commodity__price">Ціна: {totalPrice}грн.</p>
            <span
                className="commodity__cross"
                onClick={() => dispatch({ type: "deleteOrc", id: id })}
            ></span>
        </div>
    );
};

export default Commodity;
