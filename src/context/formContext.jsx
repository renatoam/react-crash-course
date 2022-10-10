import { createContext, useState } from "react";

export const FormContext = createContext(null)

export const FormProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return (
    <FormContext.Provider value={{ loading, setLoading }}>
      {children}
    </FormContext.Provider>
  )
}
