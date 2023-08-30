import { Router } from "express";
import { getCoursesController } from "../controllers/courses.controllers";

export const courseRoute: Router = Router()


courseRoute.get('', getCoursesController)