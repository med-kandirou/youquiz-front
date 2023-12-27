import { Salle } from "./Salle.model";
import { Student } from "./Student.model";


export interface Participate {
  participateID: ParticipateID;
  dateParticipation: Date;
}


export interface ParticipateID {
    student: Student;
    salle: Salle;
}