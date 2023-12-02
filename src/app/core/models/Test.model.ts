import { Trainer } from "./Trainer.model";

export interface Test {
    id: number;
    successScore: number;
    canViewAnswers: boolean;
    canSeeResult: boolean;
    numberOfChances: number;
    remarks: string;
    instructions: string;
    trainer: Trainer;
}