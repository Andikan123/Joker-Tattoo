import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDebt, payDebt } from "../redux/slices/TotalSlice";

const DebtPage = () => {
  const dispatch = useDispatch();
  const debts = useSelector((s) => s.totals.debt);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const totalDebt = debts.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">💸 Manage Your Debts</h2>
      <p className="text-lg text-gray-600">Total Debt: <strong>${totalDebt.toLocaleString()}</strong></p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!name || !amount) return;

          dispatch(addDebt({ id: Date.now(), name, amount: Number(amount) }));
          setName("");
          setAmount("");
        }}
        className="flex gap-3 flex-wrap"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Who do you owe?"
          className="border p-2 rounded flex-1"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="border p-2 rounded w-32"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
          Add Debt
        </button>
      </form>

      <div className="bg-white rounded shadow p-4">
        <h3 className="text-xl font-semibold mb-4">📋 Debts List</h3>
        {debts.length === 0 ? (
          <p className="text-gray-500">No debts recorded.</p>
        ) : (
          <ul className="divide-y">
            {debts.map((debt) => (
              <li key={debt.id} className="flex justify-between items-center py-3">
                <div>
                  <p className="font-medium text-gray-800">{debt.name}</p>
                  <p className="text-gray-500 text-sm">${debt.amount.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => dispatch(payDebt(debt.id))}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Mark as Paid
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DebtPage;
