import { PropertyType } from "@prisma/client";
import { z } from "zod";

export const createPropertyDto = z.object({
    title: z.string().min(3, "Título tem que ter pelo menos 3 caracteres"),
    type: z.enum(PropertyType),
    address: z.string().min(5, "Endereço tem que ter pelo menos 5 caracteres"),
    area: z.number().positive("Área deve ser um número positivo"),
    price: z.number().positive("Preço deve ser um número positivo"),
    description: z.string().optional(),
    bedrooms: z.number().int().positive("Número de quartos deve ser um número positivo").optional(),
    bathrooms: z.number().int().positive("Número de banheiros deve ser um número positivo").optional(),
})

export type CreatePropertyDto = z.infer<typeof createPropertyDto>;

export const updatePropertyDto = createPropertyDto.partial();

export type UpdatePropertyDto = z.infer<typeof updatePropertyDto>;

export const propertyIdParamDto = z.object({
    id: z.uuid("ID inválido"),
})

export type PropertyIdParamDto = z.infer<typeof propertyIdParamDto>;