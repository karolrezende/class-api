import { Request, Response } from "express";
import { TcourseSchema, TcourseSchemaArr, TcourseSchemaRequest, TcourseSchemaRequestArr } from "../interfaces/courses.interfaces";
import { getCoursesServices } from "../services/courses/getCourses.services";
import { Courses } from "../entities/courses.entities";
import { postCoursesServices } from "../services/courses/postCourses.services";

export const getCoursesController = async(req: Request, res: Response): Promise<Response<Courses[]>> => {
    const gettedCourses: Courses[] = await getCoursesServices()
    return res.status(200).json(gettedCourses)
}

export const postCoursesController = async(req: Request, res: Response): Promise<Response<TcourseSchema|TcourseSchemaArr>> => {
    const postBody: TcourseSchemaRequest | TcourseSchemaRequestArr = req.body
    const createdBody: TcourseSchema | TcourseSchemaArr= await postCoursesServices(postBody)
    return res.status(201).json(createdBody)
}