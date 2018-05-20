import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ShowallEmployComponent } from './employee/showall-employ/showall-employ.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComponentComponent } from './employee/create-component/create-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { ManagercommentsComponent } from './managercomments/managercomments.component';
import { EditComponent } from './employee/edit/edit.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { ShowprojectComponent } from './project/showproject/showproject.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { CreatetaskComponent } from './projecttask/createtask/createtask.component';
import { DeletetaskComponent } from './projecttask/deletetask/deletetask.component';
import { EdittaskComponent } from './projecttask/edittask/edittask.component';
import { ShowtaskComponent } from './projecttask/showtask/showtask.component';
import { CreateuserComponent } from './userstories/createuser/createuser.component';
import { DeleteuserComponent } from './userstories/deleteuser/deleteuser.component';
import { EdituserComponent } from './userstories/edituser/edituser.component';
import { ShowuserComponent } from './userstories/showuser/showuser.component';
import { CreatemanagercmtComponent } from './managercomments/createmanagercmt/createmanagercmt.component';
import { EditmanagercmtComponent } from './managercomments/editmanagercmt/editmanagercmt.component';
import { DeletemanagercmtComponent } from './managercomments/deletemanagercmt/deletemanagercmt.component';
import { ShowmanagercmtComponent } from './managercomments/showmanagercmt/showmanagercmt.component';
import { ServiceComponent } from './service/service.component';
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ShowallEmployComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponentComponent,
    ProjectComponent,
    ProjecttaskComponent,
    UserstoriesComponent,
    ManagercommentsComponent,
    EditComponent,
    DeleteComponent,
    ShowprojectComponent,
    CreateprojectComponent,
    EditprojectComponent,
    DeleteprojectComponent,
    CreatetaskComponent,
    DeletetaskComponent,
    EdittaskComponent,
    ShowtaskComponent,
    CreateuserComponent,
    DeleteuserComponent,
    EdituserComponent,
    ShowuserComponent,
    CreatemanagercmtComponent,
    EditmanagercmtComponent,
    DeletemanagercmtComponent,
    ShowmanagercmtComponent,
    ServiceComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
