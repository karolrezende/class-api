import { z } from "zod";

export const courseSchema = z.object({
    id: z.number(),
    name: z.string(),
    desc: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullish()
})

export const courseSchemaRequest = courseSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true, 
    deletedAt: true
})
export const courseSchemaNameRequest = courseSchemaRequest.omit({
    desc: true
})

export const courseSchemaPatchRequest = courseSchemaRequest.partial()