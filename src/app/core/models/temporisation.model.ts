import { Question } from "./Question.model";
import { Test } from "./Test.model";

export interface Temporisation {
    id: number;
    time:number;
    test:Test;
    question:Question;
}