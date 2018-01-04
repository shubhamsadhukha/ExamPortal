import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

//  IMPORT SERVICES
import { BookService } from './services/book.service';
import { UserService } from './services/user.service';
import { ExamService } from './services/exam.service';
import { ResultService } from './services/result.service';
import { QuestionService } from './services/question.service';
import { QuestionPaperService } from './services/questionpaper.service';
// END OF SERVICES

// IMPORTING COMPONENTS
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
// END OF COMPONENTS


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    QuestionsComponent,
    ExamsComponent,
    ReportsComponent,
    SubjectsComponent,
    AllUsersComponent,
    AddQuestionsComponent,
    AddSubjectsComponent,
    AddExamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BookService, UserService, ExamService, ResultService, QuestionService, QuestionPaperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
