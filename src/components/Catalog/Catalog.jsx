import { useState } from "react";
import "./Catalog.scss";
import Orc from "./Orc/Orс";
import { catalogSelector } from "./catalogSelector";
import { useSelector } from "react-redux";

const Catalog = () => {
      const data=useSelector(catalogSelector)
    return (
        <div className="catalog">
            <div className="catalog__container">
                <h2>Список рабів наявних у продажі:</h2>
                {data.map((item,index) => {
                    return <Orc key={item.id} id={item.id} index={index} fotoLink={item.fotoLink} name={item.name} description={item.description} price={item.price}/>;
                })}
            </div>
        </div>
    );
};

export default Catalog;
