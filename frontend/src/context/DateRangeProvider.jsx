import { createContext, useContext, useState } from "react";

const initialContextValue = {
  startDate: null,
  endDate: null,
  setStartDate: () => {},
  setEndDate: () => {},
};

const DateRangeContext = createContext(initialContextValue);

export function DateRangeProvider({ children }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const contextValues = { startDate, endDate, setStartDate, setEndDate };

  return <DateRangeContext.Provider value={contextValues}>{children}</DateRangeContext.Provider>;
}

export function useDateRange() {
  const context = useContext(DateRangeContext)
  if (context === undefined) {
    throw new Error('useDateRange deve ser usado dentro do DateRangeProvider')
  }
  return context
}
