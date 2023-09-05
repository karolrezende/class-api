import { NextFunction, Request, Response } from "express"
import { courseRepository } from "../data-source"
import { Courses } from "../entities/courses.entities"
import { AppError } from "../error"

export const ensureCourseDoesntExist = async( req: Request,res:Response, next:NextFunction) => {

    const nameFinded: Courses | null = await courseRepository.findOneBy({
        name: req.body.name
    })

    if(nameFinded == null){
        throw new AppError("Course not found", 404)
    }

    next()
}