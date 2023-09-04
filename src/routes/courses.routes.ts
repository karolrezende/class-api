import { Router } from "express";
import { getCoursesController, postCoursesController } from "../controllers/courses.controllers";
import { ensureSchema } from "../middlewares/ensureSchema.middlewares";
import { courseSchemaRequest, courseSchemaRequestArr } from "../schemas/courses.schema";

export const courseRoute: Router = Router()


courseRoute.get('', getCoursesController)
courseRoute.post('', ensureSchema(courseSchemaRequest||courseSchemaRequestArr), postCoursesController)