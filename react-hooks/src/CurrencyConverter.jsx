import { useState, useMemo } from "react";
import "./CurrencyConverter.css";

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [startCurrency, setStartCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    INR: 100,
  };

  const convertedAmounts = useMemo(() => {
    const converted = {};

    Object.keys(exchangeRates).forEach((curr) => {
      converted[curr] = (
        (amount / exchangeRates[startCurrency]) *
        exchangeRates[curr]
      ).toFixed(2);
    });

    return converted;
  }, [amount, startCurrency]);

  return (
    <div className="converter-container">
      <h1>Currency Converter</h1>

      <p className="conversion-display">
        {startCurrency} to {targetCurrency} Conversion
      </p>

      <div className="form-group">
        <label>Amount</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="currency-selectors">
        <div className="form-group">
          <label>Start Currency</label>

          <select
            value={startCurrency}
            onChange={(e) => setStartCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates).map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Target Currency</label>

          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates).map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="result">
        <p>Converted Amount</p>

        <h2>
          {convertedAmounts[targetCurrency]} {targetCurrency}
        </h2>
      </div>
    </div>
  );
}