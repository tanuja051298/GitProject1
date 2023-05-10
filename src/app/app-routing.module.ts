import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './collage/home/home.component';
import { AdmsnComponent } from './collage/admsn/admsn.component';
import { DeptComponent } from './collage/dept/dept.component';
import { StudComponent } from './collage/stud/stud.component';
import { StaffComponent } from './collage/staff/staff.component';
import { LoginComponent } from './collage/login/login.component';
import { ErrorComponent } from './collage/error/error.component';
import { ParentComponent } from './dataCommunication/parent/parent.component';
import { CompAComponent } from './dataCommunication/comp-a/comp-a.component';
import { CompBComponent } from './dataCommunication/comp-b/comp-b.component';
import { PrimengComponent } from './primeng/primeng.component';
import { AuthGuard } from './auth_guard/auth.guard';


const routes: Routes = [
  {path:"", component:  HomeComponent},
  {path:"admsn", component: AdmsnComponent,pathMatch:"prefix"},
  {path:"dept/:uname/:id", component: DeptComponent,canActivate:[AuthGuard]},
  {path:"stud", component: StudComponent},
  {path:"staff", component: StaffComponent},
  {path:"login", component: LoginComponent},
  {path:"commu", component: ParentComponent},
  {path:"compA", component: CompAComponent},
  {path:"compB", component: CompBComponent},
  {path:"primeng", component: PrimengComponent},
  {path:"exam", loadChildren:()=>import('./lazyloading/exam/exam.module').then(mod=> mod.ExamModule)},
  {path:"placement", loadChildren:()=>import('./lazyloading/placements/placements.module').then(mod=> mod.PlacementsModule)
},
  
  // {path:"**", component: ErrorComponent}
  {path:"**", redirectTo: ""}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
