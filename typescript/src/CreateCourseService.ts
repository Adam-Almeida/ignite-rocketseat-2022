

class CreateCourseService {
    execute(name: string, educator: string, duration: number) {
        console.log(name, duration, educator)

    }
}

export default new CreateCourseService