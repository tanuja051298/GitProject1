import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmsnComponent } from './collage/admsn/admsn.component';
import { HomeComponent } from './collage/home/home.component';
import { DeptComponent } from './collage/dept/dept.component';
import { LoginComponent } from './collage/login/login.component';
import { StaffComponent } from './collage/staff/staff.component';
import { StudComponent } from './collage/stud/stud.component';
import { ErrorComponent } from './collage/error/error.component';
import { HeaderComponent } from './collage/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './dataCommunication/parent/parent.component';
import { OuterchildComponent } from './dataCommunication/outerchild/outerchild.component';
import { InnerchildComponent } from './dataCommunication/parent/innerchild/innerchild.component';
import { CompAComponent } from './dataCommunication/comp-a/comp-a.component';
import { CompBComponent } from './dataCommunication/comp-b/comp-b.component';
import { PrimengComponent } from './primeng/primeng.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    AdmsnComponent,
    HomeComponent,
    DeptComponent,
    LoginComponent,
    StaffComponent,
    StudComponent,
    ErrorComponent,
    HeaderComponent,
    ParentComponent,
    OuterchildComponent,
    InnerchildComponent,
    CompAComponent,
    CompBComponent,
    PrimengComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
