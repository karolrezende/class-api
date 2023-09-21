import { Router } from "express";
import { postPersonControllers } from "../controllers/person.controllers";
import { ensureSchema } from "../middlewares/ensureSchema.middlewares";
import { personSchemaRequest } from "../schemas/person.schemas";
import { ensureEmailDoesntExists } from "../middlewares/ensureEmailDoesntExists.middlewares";

export const personRoute: Router = Router()

personRoute.post('', ensureSchema(personSchemaRequest), ensureEmailDoesntExists,postPersonControllers)