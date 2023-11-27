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
    ConfirmationComponent
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
