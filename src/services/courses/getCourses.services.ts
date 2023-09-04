import { courseRepository } from "../../data-source"
import { Courses } from "../../entities/courses.entities"
import { AppError } from "../../error"

export const getCoursesServices = async () => {
    const getCourses: Courses[] | null = await courseRepository.find()

    if(getCourses.length === 0){
        throw new AppError("No courses found", 404)
    }
    
    return getCourses
}