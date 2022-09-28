import { FC } from "react"

import { Icurrency } from "./types/types"

interface CurrencyListProps {
    items: Icurrency[]
}

//якщо нам знадобиться елемент окремо
const CurrencyList: FC<CurrencyListProps> = ({ items }) => {

    return (
        <div>
            <select
                className="select-style"

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
    )
}
export default CurrencyList