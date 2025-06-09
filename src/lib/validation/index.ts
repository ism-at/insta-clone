// Here I'll define schemas for Forms, by using ZOD-Drizzle-Extension
import { z } from 'zod';

//REGISTER
export const registerSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

//LOGIN
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})


