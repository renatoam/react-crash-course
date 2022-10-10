import { createContext, useContext, useState } from "react";

export const FormContext = createContext(null)

export const useFormContext = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return (
    <FormContext.Provider value={{ loading, setLoading }}>
      {children}
    </FormContext.Provider>
  )
}
