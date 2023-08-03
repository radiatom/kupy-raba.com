import React, { useEffect, useState } from "react";
import "./Orc.scss";
import { useDispatch } from "react-redux";

const Orc = ({ index, name, description, price, fotoLink, id }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => setOpen(true), index * 500);
    }, []);
    return (
        <div className={open ? "orc open" : "orc"}>
            <img src={fotoLink} alt="фото орка" />
            <div className="orc__information">
                <h3>{name}</h3>
                <p className="orc__information_description">{description}</p>
                <p className="orc__information_price">Ціна: {price}грн.</p>
                <button
                    onClick={() => dispatch({ type: "addOrc", id: id })}
                    className="orc__information_btn"
                >
                    У кошик
                </button>
            </div>
        </div>
    );
};

export default Orc;
