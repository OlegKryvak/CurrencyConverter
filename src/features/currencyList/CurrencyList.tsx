import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import styles from "./CurrencyList.module.css";
import axios from "axios";

export const CurrencyList = () => {
  const [currunciesData, setCurrenciesData] = useState({});
  useEffect(() => {
    axios
      .get(
        "http://api.exchangeratesapi.io/v1/latest?access_key=ab723f951c8dd883d01302eb4daecae1"
      )
      .then(function (data) {
        console.log(data)
        setCurrenciesData(data.data.rates);
      })
      .catch(function (err) {
        console.log("ERR");
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {currunciesData ? (
        <tbody className={styles.table}>
          <thead>
            <td>Amount of euro</td>
            <td>Name of currency</td>
            <td>Eu</td>
          </thead>
          {Object.entries(currunciesData).map(([key, value]) => (
            <tr key={key}>
              <td>1</td>
              <td>{key}</td>
              <td>
                {"" + value}
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <div></div>
      )}
    </div>
  );
};
