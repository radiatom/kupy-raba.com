import React from "react";
import "./Catalog.scss";
import Orc from "./Orc/Orс";
import img1 from './../../img/photo_2023-08-03_08-27-26.jpg'
import img2 from './../../img/photo_2023-08-03_08-27-29.jpg'
import img3 from './../../img/photo_2023-08-03_08-27-32.jpg'
import img4 from './../../img/photo_2023-08-03_08-27-35.jpg'
import img5 from './../../img/photo_2023-08-03_08-27-41.jpg'

const Catalog = () => {
    const data = [
        {
            id: 1,
            name: "Олександр Іванов",
            fotoLink: img3,
            description: `Спіймали біля багаття коли той пробував вимовити слово "паляниця"`,
            number: 1,
            price: 40,
            totalPrice: () => {
                return this.number + this.price;
            },
        },
        {
            id: 2,
            name: "Дмитро Петров",
            fotoLink: img2,
            description: `Спіймали коли він цілував ікону яку тримав нижче поясу його друг`,
            number: 1,
            price: 50,
            totalPrice: () => {
                return this.number + this.price;
            },
        },
        {
            id: 3,
            name: "Михайло Сидоров",
            fotoLink: img1,
            description: `Друг раба Дмитра Петрова`,
            number: 1,
            price: 60,
            totalPrice: () => {
                return this.number + this.price;
            },
        },
        {
            id: 4,
            name: "Андрій Федоров",
            fotoLink: img4,
            description: `Спіймали коли той хотів підігріти воду в електрочайнику над вогнищем`,
            number: 1,
            price: 30,
            totalPrice: () => {
                return this.number + this.price;
            },
        },
        {
            id: 5,
            name: "Сергій Михайлов",
            fotoLink: img5,
            description: `Знайшли коли той застряг в туалетній ямі знижка 30%`,
            number: 1,
            price: 20,
            totalPrice: () => {
                return this.number + this.price;
            },
        },
    ];
    return (
        <div className="catalog">
            <div className="catalog__container">
                <h2>Список рабів наявних у продажі:</h2>
                {data.map((item, index) => {
                    return <Orc key={item.id} index={index} item={item} />;
                })}
            </div>
        </div>
    );
};

export default Catalog;
