import { z } from "zod"

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

const useValidation = () => {
  const emailValidation = z.string().regex(EMAIL_REGEX, { message: 'Email should have a valid format.' })

  const defaultSchema = {
    firstname: z.string().min(3, { message: 'First name should have at least 3 characters.' }),
    lastname: z.string().min(2, { message: 'Last name should have at least 1 character.' }),
    email: z.string().regex(EMAIL_REGEX, { message: 'Email should have a valid format.' }),
    password: z.string()
      .refine(string => string.split('').length >= 8, {
        message: 'Password should have at least 8 characters.',
        params: { rule: 'minimum' }
      })
      .refine(string => string.toUpperCase() !== string, {
        message: 'Password should contain lower case.',
        params: { rule: 'lowercase' }
      })
      .refine(string => string.toLowerCase() !== string, {
        message: 'Password should contain upper case.',
        params: { rule: 'uppercase' }
      })
      .refine(string => string.split('').some(char => !!Number(char)), {
        message: 'Password should contain at least one number.',
        params: { rule: 'number' }
      }),
  }
  
  const matchPasswordSchema = z.object({
    password: z.string(),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

  return {
    defaultSchema,
    matchPasswordSchema,
    emailValidation
  }
}

export default useValidation
