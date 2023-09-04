import { z } from "zod";
import { courseSchema, courseSchemaArr, courseSchemaRequest, courseSchemaRequestArr } from "../schemas/courses.schema";

export type TcourseSchema = z.infer<typeof courseSchema>
export type TcourseSchemaRequest = z.infer<typeof courseSchemaRequest>
export type TcourseSchemaArr = z.infer<typeof courseSchemaArr>
export type TcourseSchemaRequestArr = z.infer<typeof courseSchemaRequestArr>