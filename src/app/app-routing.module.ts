import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectSectionComponent } from './modules/admin/components/subject-section/subject-section.component';
import { LevelSectionComponent } from './modules/admin/components/level-section/level-section.component';
import { ResponseSectionComponent } from './modules/admin/components/response-section/response-section.component';
import { QuestionSectionComponent } from './modules/admin/components/question-section/question-section.component';
import { MediaSectionComponent } from './modules/admin/components/media-section/media-section.component';
import { AssignmentStudentComponent } from './modules/student/components/assignment-student/assignment-student.component';
import { ResultStudentComponent } from './modules/student/components/result-student/result-student.component';
import { QuizStudentComponent } from './modules/student/components/quiz-student/quiz-student.component';
import { SallesComponent } from './modules/student/components/salles/salles.component';
import { ChatRoomComponent } from './modules/student/components/chat-room/chat-room.component';
import { ChatComponent } from './modules/student/components/chat/chat.component';
import { LoginComponent } from './modules/student/components/login/login.component';
const routes: Routes = [
  { path : '', redirectTo : '/admin' , pathMatch: 'full'},
  { path: 'admin', component: QuestionSectionComponent},
  { path: 'admin/subject', component: SubjectSectionComponent},
  { path: 'admin/question', component: QuestionSectionComponent},
  { path: 'admin/response', component: ResponseSectionComponent},
  { path: 'admin/level', component: LevelSectionComponent},
  { path: 'admin/media', component: MediaSectionComponent},
  { path: 'student', component: SallesComponent},
  { path: 'student/login', component: LoginComponent},
  { path: 'student/assignement', component: AssignmentStudentComponent},
  { path: 'student/results', component: ResultStudentComponent},
  { path: 'student/quiz/:idAssign', component: QuizStudentComponent},
  { path: 'student/chat', component: ChatComponent},
  { path: 'student/room/:idRoom', component: ChatRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
