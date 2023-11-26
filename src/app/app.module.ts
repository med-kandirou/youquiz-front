import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { StudentSectionComponent } from './modules/admin/components/student-section/student-section.component';
import { TrainerSectionComponent } from './modules/admin/components/trainer-section/trainer-section.component';
import { LevelSectionComponent } from './modules/admin/components/level-section/level-section.component';
import { QuestionSectionComponent } from './modules/admin/components/question-section/question-section.component';
import { StatistiqueSectionComponent } from './modules/admin/components/statistique-section/statistique-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    StudentSectionComponent,
    TrainerSectionComponent,
    LevelSectionComponent,
    QuestionSectionComponent,
    StatistiqueSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
