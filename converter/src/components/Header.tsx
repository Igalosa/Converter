import { FC, useEffect } from "react";



import { Icurrency } from "./types/types";
import useFetch from "./useFetch";

 //імпортуємо кастомний хук
 

 
interface HeaderListProps {
  items: Icurrency[]
}

const Header:FC<HeaderListProps> = () => {

  const { items, isLoaded } = useFetch();
  if (!isLoaded) {
    return <div className="Loading">Loading...</div>;
  }
 

  return (
    <div>
      <header className="headerstyle">
        <div className="header-components">
          <h1 className="h-maintext">Курс валют</h1>
        </div>
        {/* Тут я написав вручну, так як валют мало, але якщо їх було б більше,
        то можна використати функцію map, як і в Converter.tsx */}

        <div className="header-components">
          <h1 className="h-maintext">USD/UAH</h1>
          <h4 className="h-smalltext">1 USD = {items[0].sale} UAH </h4>
        </div>
        <div className="header-components">
          <h1 className="h-maintext">EUR/UAH</h1>
          <h4 className="h-smalltext">1 EUR = {items[1].sale} UAH </h4>
        </div>
        <img
          className="currencyimage"
          src={require("../images/Currency.png")}
          alt="Currency logo"
        />
      </header>
    </div>
  );
}
export default Header;