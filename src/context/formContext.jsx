import { createContext, useContext, useEffect, useState } from "react";

export const FormContext = createContext(null)

export const useFormContext = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState(false)

  useEffect(() => {
    setFormError(false)
    setLoading(false)
  }, [])

  const value = {
    loading,
    formError,
    setLoading,
    setFormError,
  }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}
