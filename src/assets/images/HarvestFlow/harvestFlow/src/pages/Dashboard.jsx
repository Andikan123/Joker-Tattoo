import React, { useEffect } from "react";
import {
  ArrowUpRight,
  HeartHandshake,
  Wallet,
  TrendingDown,
  Star,
  RefreshCcw,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTotals,
  resetTotals,
  setExpensesFromNeeds,
  togglePaidStatus,
  markAsPaidAndReset,
} from "../redux/slices/TotalSlice";
import {
  addNeed,
  deleteNeed,
  toggleNeedMet,
} from "../redux/slices/NeedSlice";
import { toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const totals = useSelector((state) => state.totals);
  const needs = useSelector((state) => state.needs);
  const statusFlags = totals.statusFlags || {};

  const handleMarkAsPaid = (key) => {
    dispatch(markAsPaidAndReset(key));
    const message =
      key === "tithe"
        ? "✅ Tithe paid! “Bring the full tithe into the storehouse…” – Malachi 3:10"
        : "🙌 Partnership given! “Give, and it will be given to you…” – Luke 6:38";
    toast.success(message);
  };

  const priorityColor = {
    Critical: "bg-red-500 text-white",
    High: "bg-orange-500 text-white",
    Medium: "bg-yellow-400 text-black",
    Low: "bg-gray-300 text-gray-800",
  };

  useEffect(() => {
  const totalNeedExpenses = needs
    .filter((need) => need.met)
    .reduce((sum, need) => sum + need.amount, 0);

  const totalDebt = totals.debt?.reduce((sum, d) => sum + d.amount, 0) || 0;

  dispatch(setExpensesFromNeeds(totalNeedExpenses + totalDebt));
}, [needs, totals.debt, dispatch]);


  const handleToggleNeedMet = (id) => {
    dispatch(toggleNeedMet(id));
  };

  const handleResetAll = () => {
    dispatch(resetTotals());
    needs.forEach((need) => {
      if (need.met) dispatch(toggleNeedMet(need.id));
    });
  };

  const StatCard = ({ icon: Icon, title, amount, color, subtitle, paid, onToggle }) => (
    <div
      className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group ${
        onToggle ? "cursor-pointer" : ""
      }`}
      onClick={onToggle}
      title={paid !== undefined ? "Click to mark as paid" : ""}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <p className={`text-2xl font-bold ${color}`}>${amount.toLocaleString()}</p>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      {paid !== undefined && (
        <span
          className={`inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full ${
            paid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {paid ? "Paid" : "Pending"}
        </span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Reset Button */}
        <div className="flex justify-end">
          <button
            onClick={handleResetAll}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            <RefreshCcw className="w-5 h-5" />
            Reset All
          </button>
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            📊 Financial Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              icon={Wallet}
              title="General Income"
              amount={totals.generalIncome}
              color="text-green-600"
              subtitle={`Business: $${totals.businessIncome.toLocaleString()} | Other: $${totals.otherIncome.toLocaleString()}`}
            />
            <StatCard
              icon={HeartHandshake}
              title="Tithe"
              amount={totals.tithe}
              color="text-indigo-500"
              paid={!!statusFlags.tithe}
              onToggle={() => handleMarkAsPaid("tithe")}
            />
            <StatCard
              icon={ArrowUpRight}
              title="Partnership"
              amount={totals.partnership}
              color="text-purple-500"
              paid={!!statusFlags.partnership}
              onToggle={() => handleMarkAsPaid("partnership")}
            />
            <StatCard
              icon={TrendingDown}
              title="Expenses"
              amount={totals.expenses}
              color="text-red-500"
            />
            <StatCard
              icon={Wallet}
              title="Saving"
              amount={totals.saving}
              color="text-blue-600"
              paid={!!statusFlags.saving}
              onToggle={() => handleMarkAsPaid("saving")}
            />
          </div>
        </div>
       {/* 💼 Business Breakdown */}
<div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
    📈 Income by Business
  </h2>
  <div className="space-y-4">
    {Object.entries(useSelector((s) => s.businessLines))
      .sort((a, b) => b[1] - a[1])
      .map(([key, amt], index) => (
        <div
          key={key}
          className="flex items-center justify-between bg-white shadow-sm px-4 py-3 rounded-xl border border-gray-100 hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <span
              className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                index === 0
                  ? "bg-yellow-400 text-white"
                  : index === 1
                  ? "bg-gray-300 text-black"
                  : index === 2
                  ? "bg-orange-400 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {index + 1}
            </span>
            <span className="capitalize font-medium text-gray-700 text-sm">
              {key.replace(/([A-Z])/g, " $1")}
            </span>
          </div>
          <span className="text-blue-600 font-semibold text-lg">
            ₦{amt.toLocaleString()}
          </span>
        </div>
      ))}
  </div>
</div>



        {/* Needs Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="text-yellow-500" />
            Most Pressing Needs
          </h2>

          {/* Add Need Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const title = form.title.value.trim();
              const amount = parseFloat(form.amount.value);
              const priority = form.priority.value;
              if (title && !isNaN(amount) && priority) {
                dispatch(
                  addNeed({
                    id: Date.now(),
                    title,
                    amount,
                    priority,
                  })
                );
                form.reset();
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6"
          >
            <input
              type="text"
              name="title"
              placeholder="Need Title"
              className="border p-2 rounded-md"
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              className="border p-2 rounded-md"
              required
            />
            <select name="priority" className="border p-2 rounded-md" required>
              <option value="">Priority</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button
              type="submit"
              className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 transition"
            >
              Add Need
            </button>
          </form>

          {/* Needs List */}
          <ul className="divide-y">
            {needs.map((need) => (
              <li
                key={need.id}
                className="py-3 flex justify-between items-center"
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => handleToggleNeedMet(need.id)}
                >
                  <p
                    className={`font-medium ${
                      need.met
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {need.title}
                  </p>
                  <span
                    className={`text-xs mt-1 px-2 py-1 rounded-full inline-block ${
                      priorityColor[need.priority]
                    }`}
                  >
                    {need.priority} Priority
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <p
                    className={`font-bold text-lg ${
                      need.met ? "line-through text-gray-400" : "text-red-600"
                    }`}
                  >
                    ${need.amount.toLocaleString()}
                  </p>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => dispatch(deleteNeed(need.id))}
                    title="Delete Need"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
