import { createReducer, on } from '@ngrx/store';
import { login,logout } from '../actions/student.actions';
import { Student } from '../../models/Student.model';


  export interface AppState {
    student: Student;
  }

  export const initialStudent: Student = {
    code: 0,
    dateInscription: '',
    firstName: '',
    lastName: '',
    birthday: '',
    adresse: '',
  };

  export const studentReducer = createReducer(
    initialStudent,
    on(login, (state, { student }) => {
      // Update the state based on the login action
      // You need to return the new state here
      return { ...state, ...student };
    }),
    on(logout, (state) => {
      return initialStudent
    })
  );