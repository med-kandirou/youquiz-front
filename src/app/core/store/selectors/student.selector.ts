
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/student.reducer';


export const selectStudentState = (state: AppState) => state.student;

export const selectInitialStudent = createSelector(
  selectStudentState,
  (student) => student
);