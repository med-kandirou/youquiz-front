import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { LevelSectionComponent } from './modules/admin/components/level-section/level-section.component';
import { QuestionSectionComponent } from './modules/admin/components/question-section/question-section.component';
import { StatistiqueSectionComponent } from './modules/admin/components/statistique-section/statistique-section.component';
import { SubjectSectionComponent } from './modules/admin/components/subject-section/subject-section.component';
import { ResponseSectionComponent } from './modules/admin/components/response-section/response-section.component';
import { MediaSectionComponent } from './modules/admin/components/media-section/media-section.component';
import { ConfirmationComponent } from './core/shared/components/confirmation/confirmation.component';

import { FormsModule } from '@angular/forms';
import { SaveQuestionComponent } from './core/shared/components/save-question/save-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SaveResponseComponent } from './core/shared/components/save-response/save-response.component';
import { SaveLevelComponent } from './core/shared/components/save-level/save-level.component';
import { SaveSubjectComponent } from './core/shared/components/save-subject/save-subject.component';
import { SaveMediaComponent } from './core/shared/components/save-media/save-media.component';
import { NavbarStudentComponent } from './modules/student/components/navbar-student/navbar-student.component';
import { AssignmentStudentComponent } from './modules/student/components/assignment-student/assignment-student.component';
import { ResultStudentComponent } from './modules/student/components/result-student/result-student.component';
import { QuizStudentComponent } from './modules/student/components/quiz-student/quiz-student.component';
import { StoreModule } from '@ngrx/store';
import { SallesComponent } from './modules/student/components/salles/salles.component';
import { ChatRoomComponent } from './modules/student/components/chat-room/chat-room.component';
import { ChatComponent } from './modules/student/components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LevelSectionComponent,
    QuestionSectionComponent,
    StatistiqueSectionComponent,
    SubjectSectionComponent,
    ResponseSectionComponent,
    MediaSectionComponent,
    ConfirmationComponent,
    SaveQuestionComponent,
    SaveResponseComponent,
    SaveLevelComponent,
    SaveSubjectComponent,
    SaveMediaComponent,
    NavbarStudentComponent,
    AssignmentStudentComponent,
    ResultStudentComponent,
    QuizStudentComponent,
    SallesComponent,
    ChatRoomComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
