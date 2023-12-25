import { Assignment } from "./Assignment.model";
import { Validation } from "./Validation.model";

export interface Answer {
    id: number;
    validation: Validation;
    assignment: Assignment;
}