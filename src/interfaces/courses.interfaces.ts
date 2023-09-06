import { z } from "zod";
import { courseSchema, courseSchemaNameRequest, courseSchemaPatchRequest, courseSchemaRequest} from "../schemas/courses.schema";

export type TcourseSchema = z.infer<typeof courseSchema>
export type TcourseSchemaRequest = z.infer<typeof courseSchemaRequest>
export type TcourseSchemaNameRequest = z.infer<typeof courseSchemaNameRequest>
export type TcourseSchemaPatchRequest = z.infer<typeof courseSchemaPatchRequest>