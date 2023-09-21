import { Router } from "express";
import { getCourseByNameController, getCoursesController, patchCoursesController, postCoursesController } from "../controllers/courses.controllers";
import { ensureSchema } from "../middlewares/ensureSchema.middlewares";
import { courseSchemaNameRequest, courseSchemaPatchRequest, courseSchemaRequest} from "../schemas/courses.schema";
import { ensureCourseDoesntExist } from "../middlewares/ensureCourseDoenstExists.middlewares";
import { ensureCourseExists } from "../middlewares/ensureCourseExists.middlewares";
import { patchCoursesService } from "../services/courses/patchCourses.services";

export const courseRoute: Router = Router()


courseRoute.get('', getCoursesController) //get todos os cursos
courseRoute.post('', ensureSchema(courseSchemaRequest), ensureCourseDoesntExist,postCoursesController) //criar um curso, precisa adm
courseRoute.get('/nome', ensureSchema(courseSchemaNameRequest), ensureCourseExists, getCourseByNameController) //pegar um curso por nome
courseRoute.patch('', ensureSchema(courseSchemaPatchRequest), ensureCourseExists, patchCoursesController) //atualizar informações de  um curso, precisa adm
courseRoute.delete('', ensureCourseExists, ) //deletar informações de um curso, precisa adm