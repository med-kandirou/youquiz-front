import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatistiqueSectionComponent } from './modules/admin/components/statistique-section/statistique-section.component';
import { StudentSectionComponent } from './modules/admin/components/student-section/student-section.component';
import { LevelSectionComponent } from './modules/admin/components/level-section/level-section.component';
import { TrainerSectionComponent } from './modules/admin/components/trainer-section/trainer-section.component';
import { QuestionSectionComponent } from './modules/admin/components/question-section/question-section.component';

const routes: Routes = [
  { path: 'admin', component: StatistiqueSectionComponent},
  { path: 'admin/student', component: StudentSectionComponent},
  { path: 'admin/trainer', component: TrainerSectionComponent},
  { path: 'admin/question', component: QuestionSectionComponent},
  { path: 'admin/level', component: LevelSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
