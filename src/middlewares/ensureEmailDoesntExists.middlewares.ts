import { NextFunction, Request, Response } from "express";
import { personRepository } from "../data-source";
import { AppError } from "../error";
import { Person } from "../entities/person.entities";

export const ensureEmailDoesntExists = async(req: Request, res:Response,next:NextFunction): Promise<void> => {
    const ensureEmail: Person |null = await personRepository.findOneBy({
        email: req.body.email
    })
    
    if(ensureEmail != null){
        throw new AppError("Email Already Exists", 400)
    }
    
    next()
}