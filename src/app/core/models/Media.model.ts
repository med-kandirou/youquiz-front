import { MediaType } from "../enums/mediaType.enum";
import { Question } from "../models/Question.model";

export interface Media{
    id:number,
    src:string,
    mediaType:MediaType,
    question:Question
}