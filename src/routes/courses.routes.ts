import { Router } from "express";
import { getCourseByNameController, getCoursesController, postCoursesController } from "../controllers/courses.controllers";
import { ensureSchema } from "../middlewares/ensureSchema.middlewares";
import { courseSchemaNameRequest, courseSchemaPatchRequest, courseSchemaRequest} from "../schemas/courses.schema";
import { ensureCourseDoesntExist } from "../middlewares/ensureCourseDoenstExists.middlewares";
import { ensureCourseExists } from "../middlewares/ensureCourseExists.middlewares";

export const courseRoute: Router = Router()


courseRoute.get('', getCoursesController)
courseRoute.post('', ensureSchema(courseSchemaRequest), ensureCourseDoesntExist,postCoursesController)
courseRoute.get('/nome', ensureSchema(courseSchemaNameRequest), ensureCourseExists, getCourseByNameController)
courseRoute.patch('', ensureSchema(courseSchemaPatchRequest), ensureCourseExists, )