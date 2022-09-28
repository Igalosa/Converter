
import axios from "axios";
import { useEffect, useState } from "react";
import { Icurrency } from "./types/types";



const useFetch = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Icurrency[]>([]);
  const UAHvalue = { ccy: "UAH", base_ccy: "UAH", buy: "1", sale: "1" };




  async function fetchItems() {
    try {
      const result = await axios.get<Icurrency[]>(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      setIsLoaded(true);
      result.data.pop();
      result.data.push(UAHvalue);
      setItems(result.data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchItems()
  },
    []);


  return { items, isLoaded };
};
export default useFetch;
