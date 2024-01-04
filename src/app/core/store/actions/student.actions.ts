import { createAction, props } from '@ngrx/store';
import { Student } from '../../models/Student.model';

export const login = createAction('[Counter Component] Login',props<{ student: Student }>());