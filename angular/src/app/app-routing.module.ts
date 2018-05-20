import { NgModule, Component } from '@angular/core';
import{ RouterModule, Routes }from'@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowallEmployComponent } from './employee/showall-employ/showall-employ.component';
import { CreateComponentComponent } from './employee/create-component/create-component.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { EditComponent } from './employee/edit/edit.component';
import { ShowprojectComponent } from './project/showproject/showproject.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { ProjectComponent } from './project/project.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { ManagercommentsComponent } from './managercomments/managercomments.component';
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

const routes:Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[]
  },
  {
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
  },
  {
    path:'employee',
    component:EmployeeComponent,
    children:[
      {
        path:'show',
        component:ShowallEmployComponent,
        children:[]
      },
      {
        path:'create',
        component:CreateComponentComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component:DeleteComponent,
        children:[]
      },
      {
        path:'edit/:id',
        component:EditComponent,
        children:[]
      }
    ]
  },
  {
    path:'project',
    component:ProjectComponent,
    children:[
      {
        path:'show',
        component:ShowprojectComponent,
        children:[]
      },
      {
        path:'create',
        component:CreateprojectComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component:DeleteprojectComponent,
        children:[]
      },
      {
        path:'edit/:id',
        component:EditprojectComponent,
        children:[]
      }
    ]
  },

  {
    path:'projecttask',
    component:ProjecttaskComponent,
    children:[
      {
        path:'show',
        component:ShowtaskComponent,
        children:[]
      },
      {
        path:'create',
        component:CreatetaskComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component:DeletetaskComponent,
        children:[]
      },
      {
        path:'edit/:id',
        component:EdittaskComponent,
        children:[]
      }
    ]
  },
  {
    path:'user',
    component:UserstoriesComponent,
    children:[
      {
        path:'show',
        component:ShowuserComponent,
        children:[]
      },
      {
        path:'create',
        component:CreateuserComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component:DeleteuserComponent,
        children:[]
      },
      {
        path:'edit/:id',
        component:EdituserComponent,
        children:[]
      }
    ]
  },

  {
    path:'manager',
    component:ManagercommentsComponent,
    children:[
      {
        path:'show',
        component:ShowmanagercmtComponent,
        children:[]
      },
      {
        path:'create',
        component:CreatemanagercmtComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component:DeletemanagercmtComponent,
        children:[]
      },
      {
        path:'edit/:id',
        component:EditmanagercmtComponent,
        children:[]
      }
    ]
  }
 ];
  

@NgModule({
  imports: 
    [RouterModule.forRoot(routes)],
    exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
