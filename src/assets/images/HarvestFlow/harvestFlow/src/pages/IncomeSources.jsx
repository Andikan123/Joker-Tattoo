import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../redux/slices/IncomeSlice";
import { Wallet } from "lucide-react";

const IncomeSources = () => {
  const incomeSources = useSelector((s) => s.incomeSources);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ source: "", amount: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    const { source, amount } = form;
    if (source && amount) {
      dispatch(addIncome({ source, amount: parseFloat(amount) }));
      setForm({ source: "", amount: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">💼 Income Sources</h2>

      <form
        onSubmit={handleAdd}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <select
          name="source"
          value={form.source}
          onChange={(e) => setForm({ ...form, source: e.target.value })}
          className="border p-2 rounded"
          required
        >
          <option value="">Choose Source</option>
          <option value="salary">Salary</option>
          <option value="coding">Coding</option>
          <option value="renting">Renting</option>
          <option value="giftCard">Gift Card</option>
          <option value="exchange">Exchange</option>
        </select>
        <input
          type="number"
          name="amount"
          placeholder="Amount in $"
          className="border p-2 rounded"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Add Earning
        </button>
      </form>

      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(incomeSources)
          .sort(([, a], [, b]) => b - a)
          .map(([source, amount]) => (
            <div
              key={source}
              className="bg-white shadow-md p-4 rounded-xl border-l-4 border-blue-400"
            >
              <div className="flex items-center justify-between">
                <h3 className="capitalize font-semibold text-gray-700">
                  {source.replace(/([A-Z])/g, " $1")}
                </h3>
                <Wallet className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-blue-700 mt-2">
                ${amount.toLocaleString()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IncomeSources;
