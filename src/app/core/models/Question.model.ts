import { QuestionType } from "../enums/questionType.enum";
import { Level } from "./Level.model";
import { Subject } from "./Subject.model";

export interface Question {
    id: number;
    numberOfResponses: number;
    numberOfCorrectResponses: number;
    questionText: string;
    type: QuestionType;
    subject: Subject;
    level: Level;
}