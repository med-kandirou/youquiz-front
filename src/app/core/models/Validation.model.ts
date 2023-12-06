import { Question } from "./Question.model";
import { Response } from "./Response.model";
export interface Validation{
    id :number;
    // point:number;
    response:Response;
    question:Question;
}