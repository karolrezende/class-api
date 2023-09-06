import { courseRepository } from "../../data-source"
import { Courses } from "../../entities/courses.entities"
import { TcourseSchema, TcourseSchemaNameRequest } from "../../interfaces/courses.interfaces"
import { courseSchema } from "../../schemas/courses.schema"

export const getCourseByNameService = async (name: string): Promise<Courses>=>{

    const findedName!: Courses = await courseRepository.findOneBy({
        name: name
    })

    const zoddedCourse: TcourseSchema = courseSchema.parse(findedName)

    return zoddedCourse!
}