import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Report = () => {
  const totals = useSelector((state) => state.totals);
  const [transactions, setTransactions] = useState([]);
  
  const statusFlags = totals.statusFlags || {};


  useEffect(() => {
    const allTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const monthlyTransactions = allTransactions.filter((txn) => {
      const txnDate = new Date(txn.date);
      return txnDate.getMonth() === currentMonth && txnDate.getFullYear() === currentYear;
    });

    setTransactions(monthlyTransactions);
  }, []);

  const income = totals.generalIncome || 0;
  const expenses = totals.expenses || 0;
  const savings = totals.saving || 0;

  const net = income - expenses;
  const status = net > 0 ? "Gain" : net === 0 ? "Break Even" : "Debt / Deficit";

  const statusColor =
    net > 0 ? "text-green-600" : net === 0 ? "text-yellow-600" : "text-red-600";
  const statusBg =
    net > 0 ? "bg-green-100" : net === 0 ? "bg-yellow-100" : "bg-red-100";

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center drop-shadow-sm">
          📊 Monthly Financial Report
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-400">
            <p className="text-sm font-semibold text-gray-600">Total Income</p>
            <p className="text-3xl font-bold text-green-600 mt-1">
              ${income.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-400">
            <p className="text-sm font-semibold text-gray-600">Total Expenses</p>
            <p className="text-3xl font-bold text-red-500 mt-1">
              ${expenses.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-400">
            <p className="text-sm font-semibold text-gray-600">Total Savings</p>
            <p className="text-3xl font-bold text-blue-500 mt-1">
              ${savings.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🧾 Transaction History (This Month)
          </h3>
          {transactions.length === 0 ? (
            <p className="text-gray-500">No transactions recorded this month.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {transactions.map((txn, idx) => (
                <li key={idx} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-800 font-medium">
                      {txn.description || txn.source || txn.type}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(txn.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p
                    className={`text-lg font-semibold ${
                      txn.type === "income"
                        ? "text-green-600"
                        : txn.type === "expense"
                        ? "text-red-600"
                        : "text-blue-500"
                    }`}
                  >
                    ${txn.amountInUSD?.toLocaleString() || txn.amount?.toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Summary Note */}
        <div className={`rounded-2xl p-6 shadow text-center ${statusBg}`}>
          <h4 className="text-xl font-semibold text-gray-700 mb-2">📌 Summary</h4>
          <p className={`text-2xl font-bold ${statusColor}`}>
            {status}: ${net.toLocaleString()}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {["tithe", "partnership", "saving"].map((key) => {
    const label = key[0].toUpperCase() + key.slice(1);
    const status = statusFlags[key]?.paid;
    const date = statusFlags[key]?.date;

    return (
      <div key={key} className="bg-white p-4 rounded shadow-md border-l-4 border-indigo-500">
        <p className="text-lg font-semibold">{label}</p>
        <p
          className={`text-sm mt-1 ${
            status ? "text-green-600" : "text-red-600"
          }`}
        >
          {status ? "Paid" : "Pending"}
        </p>
        {status && date && (
          <p className="text-xs text-gray-500">
            Paid on: {new Date(date).toLocaleDateString()}
          </p>
        )}
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default Report;
