import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getSummaryService } from "../services/summary";
import { useAuthContext } from "./authContext";

export const SummaryContext = createContext(null)

export const useSummaryContext = () => useContext(SummaryContext)

export const SummaryProvider = ({ children }) => {
  const { user } = useAuthContext()
  const [summary, setSummary] = useState([])

  const fetchSummaryData = useCallback(async () => {
    const response = await getSummaryService(user?.accessToken)
    
    setSummary(response?.summary)
  }, [user])

  useEffect(() => {
    if (user) {
      fetchSummaryData()
    }
  }, [user, fetchSummaryData])

  return (
    <SummaryContext.Provider value={{ summary }}>
      {children}
    </SummaryContext.Provider>
  )
}
