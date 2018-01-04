import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { QuestionsComponent } from './questions/questions.component';
import { ExamsComponent } from './exams/exams.component';
import { ReportsComponent } from './reports/reports.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AllUsersComponent } from './allusers/allusers.component';
import { AddQuestionsComponent } from './questions/addquestion/addquestion.component';
import { AddSubjectsComponent } from './subjects/addsubject/addsubject.component';
import { AddExamsComponent } from './exams/addexam/addexam.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'questions',      component: QuestionsComponent },
    { path: 'questions/add',  component: AddQuestionsComponent },
    { path: 'exams',          component: ExamsComponent },
    { path: 'exams/add',      component: AddExamsComponent },
    { path: 'reports',        component: ReportsComponent },
    { path: 'subjects',       component: SubjectsComponent },
    { path: 'subjects/add',   component: AddSubjectsComponent },
    { path: 'allusers',       component: AllUsersComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
