import { courseRepository } from "../../data-source";
import { TcourseSchema, TcourseSchemaPatchRequest } from "../../interfaces/courses.interfaces";
import { courseSchema } from "../../schemas/courses.schema";

export const patchCoursesService = async (bodyRequest: TcourseSchemaPatchRequest): Promise<TcourseSchema> => {

    const oldCourse: any = await courseRepository.findOneBy({
        name: bodyRequest.name!
    })

    const createdCourse = courseRepository.create({
        ...oldCourse!,
        ...bodyRequest
    })

    await courseRepository.save(createdCourse)

    const zoddedCourse = courseSchema.parse(createdCourse)

    return zoddedCourse
}