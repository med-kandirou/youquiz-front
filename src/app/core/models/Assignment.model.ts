import { Student } from "./Student.model";
import { Test } from "./Test.model";
export interface Assignment {
    id: number;
    dateStart: Date;
    dateEnd: Date;
    score: number;
    test: Test;
    student: Student;
}