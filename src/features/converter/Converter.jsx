import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./Converter.module.css";
import axios from "axios";

export const Converter = () => {
  const [currunciesData, setCurrenciesData] = useState({});
  const [euroAmount, setEuroAmount] = useState(0);
  const [base, setBase] = useState(0);
  useEffect(() => {
    axios
      .get(
        "http://api.exchangeratesapi.io/v1/latest?access_key=ab723f951c8dd883d01302eb4daecae1"
      )
      .then(function (data) {
        setCurrenciesData(data.data.rates);
      })
      .catch(function (err) {
        console.log("ERR");
        console.log(err);
      });
  }, []);
  var options = [];
  currunciesData
    ? Object.entries(currunciesData).map(([label, value]) => {
        options.push({ label, value });
      })
    : console.log("dvd");

  const setEuroAmountHandler = (e) => {
    if (typeof +e.target.value === "string") {
      return;
    }
    setEuroAmount(e.target.value);
  };

  const getSelectedCurrency = (e) => {
    setBase(e.value);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.container}></div>
        <input
          placeholder="Euro"
          className={styles.input}
          value={euroAmount}
          onChange={setEuroAmountHandler}
        />
        {currunciesData ? (
          <Select
            options={options}
            onChange={getSelectedCurrency}
            className={styles.select}
          />
        ) : (
          console.log(options)
        )}
        {/* <button onClick={()=>{setConvertedCurrency()={}}}>Convert</button> */}
        <div className={styles.converter}>{euroAmount * base}</div>
      </div>
      {!base ? (
        <div>Please, set currency, which you want to convert</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
