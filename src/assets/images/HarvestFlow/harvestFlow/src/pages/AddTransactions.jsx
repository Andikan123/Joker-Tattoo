import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTotals } from "../redux/slices/TotalSlice";

const currencySymbols = {
  NGN: "₦",
  USD: "$",
  EUR: "€",
  GBP: "£",
  TL: "₺",
};

// Hardcoded exchange rates TO USD (1 unit of currency in USD)
const exchangeRatesToUSD = {
  USD: 1,
  NGN: 0.0024, // example: 1 NGN = 0.0024 USD
  EUR: 1.1,    // 1 EUR = 1.1 USD
  GBP: 1.3,    // 1 GBP = 1.3 USD
  TL: 0.054,   // 1 TL = 0.054 USD
};

const AddTransactions = () => {
  const dispatch = useDispatch();
  const totals = useSelector((state) => state.totals);

  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [type, setType] = useState("income");
  const [currency, setCurrency] = useState("NGN");
  const [message, setMessage] = useState("");

  const convertToUSD = (amt, curr) => {
    const rate = exchangeRatesToUSD[curr] || 1;
    return amt * rate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amt = parseFloat(amount);
    if (!amt || amt <= 0 || (type === "income" && !source.trim())) {
      setMessage("Please enter a valid amount and source.");
      return;
    }

    // Convert input amount to USD
    const amountInUSD = convertToUSD(amt, currency);

    const newTransaction = {
      id: Date.now(),
      type,
      originalAmount: amt,
      currency,
      amountInUSD,
      source,
      date: new Date().toISOString(),
    };

    let updatedValues = {};

    if (type === "income") {
      // Calculate tithe and saving only for income
      const tithe = amountInUSD * 0.2;
      const saving = amountInUSD * 0.2;
      const available = amountInUSD - tithe - saving;

      updatedValues = {
        generalIncome: amountInUSD,
        tithe,
        saving,
        availableIncome: available,
        businessIncome: source.toLowerCase() === "business" ? amountInUSD : 0,
        otherIncome: source.toLowerCase() !== "business" ? amountInUSD : 0,
      };

      newTransaction.tithe = tithe;
      newTransaction.saving = saving;
      newTransaction.available = available;
    } else if (type === "expense") {
      // Expenses: no tithe or saving calculations
      updatedValues = {
        expenses: amountInUSD,
      };
    } else if (type === "saving") {
      // Savings entered directly
      updatedValues = {
        saving: amountInUSD,
      };
    }

    dispatch(updateTotals(updatedValues));

    // Save transaction locally
    const prevTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    localStorage.setItem(
      "transactions",
      JSON.stringify([newTransaction, ...prevTransactions])
    );

    // Reset form
    setAmount("");
    setSource("");
    setType("income");
    setCurrency("NGN");
    setMessage("Transaction added successfully 🎉");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="e.g. 50000"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="NGN">Naira (₦)</option>
            <option value="USD">Dollar ($)</option>
            <option value="EUR">Euro (€)</option>
            <option value="GBP">Pound (£)</option>
            <option value="TL">Lira (₺)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Transaction Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="saving">Saving</option>
          </select>
        </div>

        {type === "income" && (
          <div>
            <label className="block text-sm text-gray-600 mb-1">Source</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="e.g. Business, Freelance"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-sky-600 transition"
        >
          Add Transaction
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-green-600 font-medium">{message}</p>
      )}
    </div>
  );
};

export default AddTransactions;
