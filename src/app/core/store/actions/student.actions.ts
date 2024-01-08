import { createAction, props } from '@ngrx/store';
import { Student } from '../../models/Student.model';

export const login = createAction('[student Component] Login',props<{ student: Student }>());
export const logout = createAction('[student Component] logout');