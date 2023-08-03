import img1 from "./../img/photo_2023-08-03_08-27-26.jpg";
import img2 from "./../img/photo_2023-08-03_08-27-29.jpg";
import img3 from "./../img/photo_2023-08-03_08-27-32.jpg";
import img4 from "./../img/photo_2023-08-03_08-27-35.jpg";
import img5 from "./../img/photo_2023-08-03_08-27-41.jpg";

const initialState = {
    dataOrcs: [
        {
            id: 1,
            name: "Олександр Іванов",
            fotoLink: img3,
            description: `Спіймали біля багаття коли той пробував вимовити слово "паляниця"`,
            number: 1,
            price: 40,
            get totalPrice() {
                return this.number * this.price;
            },
        },
        {
            id: 2,
            name: "Дмитро Петров",
            fotoLink: img2,
            description: `Спіймали коли він цілував ікону яку тримав нижче поясу його друг`,
            number: 1,
            price: 50,
            get totalPrice() {
                return this.number * this.price;
            },
        },
        {
            id: 3,
            name: "Михайло Сидоров",
            fotoLink: img1,
            description: `Друг раба Дмитра Петрова`,
            number: 1,
            price: 60,
            get totalPrice() {
                return this.number * this.price;
            },
        },
        {
            id: 4,
            name: "Андрій Федоров",
            fotoLink: img4,
            description: `Спіймали коли той хотів підігріти воду в електрочайнику над вогнищем`,
            number: 1,
            price: 30,
            get totalPrice() {
                return this.number * this.price;
            },
        },
        {
            id: 5,
            name: "Сергій Михайлов",
            fotoLink: img5,
            description: `Знайшли коли той застряг в туалетній ямі знижка 30%`,
            number: 1,
            price: 20,
            get totalPrice() {
                return this.number * this.price;
            },
        },
    ],
    dataBascet: [],
    total: 0,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addLocalStorage": {
                return { ...state, dataBascet: action.localStorage };
        }
        case "addOrc": {
            if (state.dataBascet.some((item) => item.id === action.id)) {//перевірка, якщо в масиві вже є такий обєкт то нічого не добавляємо
                return state;
            } else {
                const orc = state.dataOrcs.find(
                    (item) => item.id === action.id
                );
                return { ...state, dataBascet: [...state.dataBascet, orc] };
            }
        }
        case "addNumber": {
            const updatedData = state.dataBascet.map((item) => {
                if (item.id === action.id) {
                    const updatedItem = {
                        ...item,
                        number: item.number + 1,
                    };
                    updatedItem.totalPrice =
                        updatedItem.number * updatedItem.price; // Оновити totalPrice
                    return updatedItem;
                }
                return item;
            });
            return { ...state, dataBascet: updatedData };
        }
        case "deleteNumber": {
            const updatedData = state.dataBascet.map((item) => {
                if (item.id === action.id && item.number > 0) {
                    const updatedItem = {
                        ...item,
                        number: item.number - 1,
                    };
                    updatedItem.totalPrice =
                        updatedItem.number * updatedItem.price; // Оновити totalPrice
                    return updatedItem;
                }
                return item;
            });
            return { ...state, dataBascet: updatedData };
        }
        case "deleteOrc": {
            const newDataBascet = state.dataBascet.filter(
                (item) => item.id !== action.id
            );
            return { ...state, dataBascet: newDataBascet };
        }
        case "total": {
            const totalSum = state.dataBascet.reduce((sum, currentItem) => {
                return sum + currentItem.totalPrice;
            }, 0);
            return { ...state, total: totalSum };
        }
        case "clean": {
            return { ...state, dataBascet: [] };
        }
        default:
            return state;
    }
};

export default reducer;
