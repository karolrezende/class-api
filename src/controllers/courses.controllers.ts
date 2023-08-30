import { Request, Response } from "express";

export const getCoursesController = async(req: Request, res: Response): Promise<Response> => {
    console.log('a')
    return res.send('oi')
}