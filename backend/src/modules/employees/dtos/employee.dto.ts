import { z } from "zod";

export const createEmployeeDto = z.object({
  name: z.string().min(3, "Nome tem que ter pelo menos 3 caracteres"),
  email: z.email(),
  password: z.string().min(6, "Senha tem que ter pelo menos 6 caracteres"),
  role: z.string().min(3, "Função tem que ter pelo menos 3 caracteres"),
});

export type CreateEmployeeDto = z.infer<typeof createEmployeeDto>;

export const updateEmployeeDto = z.object({
  name: z
    .string()
    .min(3, "Nome tem que ter pelo menos 3 caracteres")
    .optional(),
  email: z.email().optional(),
  password: z
    .string()
    .min(6, "Senha tem que ter pelo menos 6 caracteres")
    .optional(),
  role: z
    .string()
    .min(3, "Função tem que ter pelo menos 3 caracteres")
    .optional(),
});

export type UpdateEmployeeDto = z.infer<typeof updateEmployeeDto>;

export const employeeIdParamDto = z.object({
  id: z.string().uuid("ID inválido"),
});

export type EmployeeIdParamDto = z.infer<typeof employeeIdParamDto>;
