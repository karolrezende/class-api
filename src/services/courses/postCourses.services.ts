import { courseRepository } from "../../data-source";
import { Courses } from "../../entities/courses.entities";
import { TcourseSchema, TcourseSchemaRequest} from "../../interfaces/courses.interfaces";
import { courseSchema } from "../../schemas/courses.schema";

export const postCoursesServices = async (reqbody: TcourseSchemaRequest): Promise<TcourseSchema> => {

    const createdRequest: Courses = courseRepository.create(reqbody)
    await courseRepository.save(createdRequest)

    const zoddedCourse: TcourseSchema = courseSchema.parse(createdRequest)

    return zoddedCourse
}