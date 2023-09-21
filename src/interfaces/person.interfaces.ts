import { z } from "zod";
import { personSchema, personSchemaRequest, personSchemaResponse } from "../schemas/person.schemas";

export type TpersonSchema = z.infer<typeof personSchema>
export type TpersonSchemaRequest = z.infer<typeof personSchemaRequest>
export type TpersonSchemaResponse = z.infer<typeof personSchemaResponse>