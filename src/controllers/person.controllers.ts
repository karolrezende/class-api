import { Request, Response } from "express";
import { TpersonSchemaRequest, TpersonSchemaResponse } from "../interfaces/person.interfaces";
import { postedPersonServices } from "../services/person/postPerson.services";

export const postPersonControllers = async (req:Request, res: Response): Promise<Response<TpersonSchemaResponse>> => {
    const reqBody: TpersonSchemaRequest = req.body
    const postedPerson: TpersonSchemaResponse = await postedPersonServices(reqBody)

    return res.status(200).json(postedPerson)
}