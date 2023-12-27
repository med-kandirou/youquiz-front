
import { Student } from './Student.model';
export interface Salle {
  id: number;
  dateCreation: Date; 
  title: string;
  description: string;
  creator: Student;
}