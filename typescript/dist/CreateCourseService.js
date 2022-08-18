"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, educator, duration }) {
        console.log(name, educator, duration);
    }
}
exports.default = new CreateCourseService();
