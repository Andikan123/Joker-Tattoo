// redux/slices/TotalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("totals")) || {
  generalIncome: 0,
  businessIncome: 0,
  otherIncome: 0,
  tithe: 0,
  partnership: 0,
  expenses: 0,
  saving: 0,
   debt: [],
  availableIncome: 0,
  statusFlags: {
    tithe: false,
    partnership: false,
    saving: false,
  },
 
};

const totalSlice = createSlice({
  name: "totals",
  initialState,
  reducers: {
    updateTotals: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        if (key === "statusFlags") {
          state.statusFlags = { ...state.statusFlags, ...value };
        } else {
          state[key] = (state[key] || 0) + value;
        }
      });
      localStorage.setItem("totals", JSON.stringify(state));
    },
   addDebt: (state, action) => {
  state.debt.push(action.payload);
  state.expenses += action.payload.amount;
  localStorage.setItem("totals", JSON.stringify(state));
},
payDebt: (state, action) => {
  const id = action.payload;
  const debtIndex = state.debt.findIndex((d) => d.id === id);
  if (debtIndex !== -1) {
    const paidAmount = state.debt[debtIndex].amount;
    state.debt.splice(debtIndex, 1);
    state.expenses -= paidAmount;
    localStorage.setItem("totals", JSON.stringify(state));
  }
},
 togglePaidStatus: (state, action) => {
  const key = action.payload;

  if (!state.statusFlags) state.statusFlags = {};

  // Only pay if it's currently unpaid and has a value
  const currentAmount = state[key];
  const wasPaid = state.statusFlags[key]?.paid;

  // If not yet paid and amount > 0
  if (!wasPaid && currentAmount > 0) {
    // Mark as paid with timestamp
    state.statusFlags[key] = {
      paid: true,
      date: new Date().toISOString(),
    };

    // Reset amount to 0
    state[key] = 0;

    // Immediately set paid to false again (show "Pending")
    setTimeout(() => {
      state.statusFlags[key] = {
        paid: false,
        date: null,
      };
      localStorage.setItem("totals", JSON.stringify(state));
    }, 100); // or remove if not using this kind of middleware
  }

  localStorage.setItem("totals", JSON.stringify(state));
},

    resetTotals: () => {
      const reset = {
        generalIncome: 0,
        businessIncome: 0,
        otherIncome: 0,
        tithe: 0,
        partnership: 0,
        expenses: 0,
        saving: 0,
        debt: [],
        availableIncome: 0,
        statusFlags: {
          tithe: false,
          partnership: false,
          saving: false,
        },
      };
      localStorage.setItem("totals", JSON.stringify(reset));
      return reset;
    },
    setExpensesFromNeeds: (state, action) => {
      state.expenses = action.payload;
      localStorage.setItem("totals", JSON.stringify(state));
    },
    markAsPaidAndReset: (state, action) => {
  const key = action.payload;
  const amount = state[key];
  if (amount > 0) {
    const transaction = {
      type: key === "tithe" ? "tithe" : "partnership",
      amount,
      date: new Date().toISOString(),
      description: `${key.charAt(0).toUpperCase() + key.slice(1)} Paid`,
    };

    const existingTxns = JSON.parse(localStorage.getItem("transactions")) || [];
    localStorage.setItem("transactions", JSON.stringify([transaction, ...existingTxns]));

    state[key] = 0;
    localStorage.setItem("totals", JSON.stringify(state));
  }
},
  },
});

export const { updateTotals, resetTotals, setExpensesFromNeeds, togglePaidStatus,markAsPaidAndReset ,addDebt,payDebt } = totalSlice.actions;
export default totalSlice.reducer;
