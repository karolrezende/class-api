import { Request, Response } from "express";
import { TcourseSchema, TcourseSchemaNameRequest, TcourseSchemaPatchRequest, TcourseSchemaRequest } from "../interfaces/courses.interfaces";
import { getCoursesServices } from "../services/courses/getCourses.services";
import { Courses } from "../entities/courses.entities";
import { postCoursesServices } from "../services/courses/postCourses.services";
import { getCourseByNameService } from "../services/courses/getCourseByName.service";
import { patchCoursesService } from "../services/courses/patchCourses.services";

export const getCoursesController = async(req: Request, res: Response): Promise<Response<Courses[]>> => {
    const gettedCourses: Courses[] = await getCoursesServices()
    return res.status(200).json(gettedCourses)
}

export const postCoursesController = async(req: Request, res: Response): Promise<Response<TcourseSchema>> => {
    const postBody: TcourseSchemaRequest = req.body
    const createdBody: TcourseSchema= await postCoursesServices(postBody)
    return res.status(201).json(createdBody)
}

export const getCourseByNameController = async(req: Request, res:Response): Promise<Response<Courses>> =>{
    const name: string = req.body.name
    const gettedCourse: TcourseSchema = await getCourseByNameService(name)

    return res.status(200).json(gettedCourse)
}

export const patchCoursesController = async (req: Request, res:Response): Promise<Response<TcourseSchema>> =>{
    const tbody: TcourseSchemaPatchRequest = req.body
    const patchedCourse: TcourseSchema = await patchCoursesService(tbody) 

    return res.status(201).json(patchedCourse)
}