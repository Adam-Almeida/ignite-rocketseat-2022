import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse (req: Request, res: Response) {
    CreateCourseService.execute("NodeJs", "Dani", 10)
    return res.send()
}