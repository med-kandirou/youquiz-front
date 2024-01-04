import { createReducer, on } from '@ngrx/store';
import { login } from '../actions/student.actions';
import { Student } from '../../models/Student.model';


export const initialState:any = null;

export const studentReducer = createReducer(
  initialState,
  on(login, (state, { student }) => {
    // Update the state based on the login action
    // You need to return the new state here
    return { ...state, ...student };
  })
);