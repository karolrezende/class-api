import { NextFunction, Request, Response } from "express";
import { Courses } from "../entities/courses.entities";
import { courseRepository } from "../data-source";
import { AppError } from "../error";

export const ensureCourseDoesntExist = async( req: Request,res:Response, next:NextFunction) => {

    const nameFinded: Courses | null = await courseRepository.findOneBy({
        name: req.body.name
    })

    if(nameFinded !== null){
        throw new AppError("This course is already registred", 409)
    }

    next()
}