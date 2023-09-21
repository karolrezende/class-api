import { z } from "zod";

export const loginSchema = z.object({
    id: z.number(),
    name: z.string(),
    desc: z.string(),
    password: z.string().min(8, "password must be 12 or bigger"),
    createdAt: z.date(), 
    updatedAt: z.date(),
    deletedAt: z.date().nullish()
})

export const loginSchemaRequest = loginSchema.omit({
    id: true,
    desc: true,
    createdAt:true,
    updatedAt: true,
    deletedAt: true
})

export const loginSchemaResponse = loginSchema.omit({
    password: true
})