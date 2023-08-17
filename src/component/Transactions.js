import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import shoppingCartIcon from "../assets/icons/shopping-cart.svg";

export const Transactions = () => {
  const { getToken } = useAuth();
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    try {
      const URL = `${process.env.REACT_APP_API_SERVER_URL}/transaction`;
      const res = await axios.get(URL, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      setTransactions(() => res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(
    () => {
      getTransactions();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  console.log(transactions);

  function formatDate(date) {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: "long" });
    const day = dateObj.toLocaleString("default", { day: "numeric" });

    return `${month} ${day}`;
  }

  return (
    <div className="w-10/12 mx-auto">
      <h3 className="text-[1.25rem] font-medium text-center">
        Recent Transactions
      </h3>
      <ul className="flex flex-col gap-4 mt-6">
        {transactions.map((transaction) => (
          <li key={transaction.transaction_date} className="flex gap-4">
            <div>
              <img
                src={shoppingCartIcon}
                alt="advisor"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </div>
            <div className="flex justify-between flex-grow">
              <div className="flex flex-col">
                <span className="text-sm text-[#1C1C20] ">
                  {transaction.transaction_vendor}
                </span>
                <span className="text-sm  text-[#1C1C20]  text-[.75rem]">
                  {formatDate(transaction.transaction_date)}
                </span>
              </div>

              <span className="text-sm  text-[#1C1C20] ">
                ${transaction.transaction_price}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
