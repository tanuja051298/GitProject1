import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgexamComponent } from './ugexam/ugexam.component';
import { PgexamComponent } from './pgexam/pgexam.component';
import { ExamhomeComponent } from './examhome/examhome.component';
import { RouterModule, Routes } from '@angular/router';

const route : Routes =[
  {path:"", component:ExamhomeComponent},
  {path:"ugexam", component:UgexamComponent},
  {path:"pgexam", component:PgexamComponent}

]


@NgModule({
  declarations: [
    UgexamComponent,
    PgexamComponent,
    ExamhomeComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class ExamModule { }
