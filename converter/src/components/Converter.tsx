import { ChangeEvent, FC, useState } from "react";
import { Icurrency } from "./types/types";
import useFetch from "./useFetch";

interface IConverter {
    items: Icurrency[]
  }
const Converter: FC<IConverter> = () => {
    //Прописуємо хуки стану для конвертера

    const [inputamount, setinputamount] = useState<string | any>();
    //Курс валют відносно гривні
    const [currency1, setcurrency1] = useState<string | any>();
    const [currency2, setcurrency2] = useState<string | any>();

    //Цей стан для вибору інпуту
    const [firstinput, setfirstinput] = useState<boolean>(true);

    //Цей стан для виводу валюти після ковертації
    const [converted, setconverted] = useState<string | any>();

    //імпортуємо кастомний хук
    const { items, isLoaded } = useFetch();

  
    //Дозаоляємо вводити в інпут лише цифри
    const handleChangeinput = (event: ChangeEvent<HTMLInputElement| any>) => {

        setinputamount(event.target.value.replace(/\D/g, ""));

        //формула конвертації будь-якої валюти
        setconverted(((event.target.value.replace(/\D/g, "") * currency1) / currency2).toFixed(2));

        //робимо інпут активним
        setfirstinput(true);
    };

    //Дозаоляємо вводити в інпут лише цифри
    const handleChangeinput2 = (event: ChangeEvent<HTMLInputElement | any>) => {

        setinputamount(event.target.value.replace(/\D/g, ""));


        //формула конвертації будь-якої валюти
        setconverted(((event.target.value.replace(/\D/g, "") * currency2) / currency1).toFixed(2));

        //робимо інпут активним
        setfirstinput(false);
    };

    return (
        <div>
            <h2 className="converter-text">Конвертер валют</h2>

            <div className="converter-container">
                <div className="selectcontainer">
                    <select
                        className="select-style"
                        value={currency1}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                            setcurrency1(event.target.value);
                        }}
                    >
                        {/* Завантажуємо в селект опціїї дані з API */}
                        <option>--Оберіть валюту--</option>
                        {items.map((option, ccy) => (
                            <option key={ccy} value={option.sale}>
                                {option.ccy}
                            </option>
                        ))}
                    </select>
                    <img
                        className="arrows-style"
                        src={require("../images/exchangearrows.png")}
                    />
                    <select
                        className="select-style"
                        value={currency2}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                            setcurrency2(event.target.value);
                        }}
                    >
                        {/* Завантажуємо в селект опціїї дані з API */}
                        <option>--Оберіть валюту--</option>
                        {items.map((option, ccy) => (
                            <option key={ccy} value={option.sale}>
                                {option.ccy}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-container">
                    <input
                        className="input-style"
                        id="First"
                        value={firstinput ? inputamount : converted}
                        min={0}
                        placeholder="0"
                        onChange={handleChangeinput}
                    ></input>
                    <input
                        id="Second"
                        className="input-style2"
                        min={0}
                        placeholder="0"
                        value={firstinput ? converted : inputamount}
                        onChange={handleChangeinput2}
                    ></input>
                </div>
            </div>
        </div>
    );
}
export default Converter;