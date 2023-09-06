import { courseRepository } from "../../data-source";
import { Courses } from "../../entities/courses.entities";
import { TcourseSchema, TcourseSchemaPatchRequest } from "../../interfaces/courses.interfaces";

export const patchCoursesService = async (bodyRequest: TcourseSchemaPatchRequest): Promise<TcourseSchema> => {

    const oldCourse: Courses |null = await courseRepository.findOneBy({
        name: bodyRequest.name!
    })

    const createdCourse = courseRepository.create({
        oldCourse!,
        ...bodyRequest
    })

    await courseRepository.save(createdCourse)

}