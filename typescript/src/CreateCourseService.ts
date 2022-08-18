interface Course {
  name: string;
  educator: string;
  duration?: number;
}

class CreateCourseService {
  execute({ name, educator, duration }: Course) {
    console.log(name, educator, duration);
  }
}

export default new CreateCourseService();
