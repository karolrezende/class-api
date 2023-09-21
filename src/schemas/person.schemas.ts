import { z } from "zod";

export const personSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email("Invalid email"),
    desc: z.string(),
    password: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullish(),
    admin: z.boolean()
})

export const personSchemaRequest = personSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
})

export const personSchemaResponse = personSchema.omit({
    password: true
})