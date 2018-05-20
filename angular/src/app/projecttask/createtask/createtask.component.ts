import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {
  formData:FormGroup;
  constructor(private http: HttpClient,private router: Router) { }
tasks;
  ngOnInit() {
    this.formData=new FormGroup({        
      assignedto: new FormControl('',[Validators.required]), 
      userstoryid: new FormControl('',[Validators.required]),
      tstartdate: new FormControl('',[Validators.required]),
      tenddate: new FormControl('',[Validators.required]),
      tcompletion: new FormControl('',[Validators.required])
     });
     this.showtask();
   }
    
   showtask(){    
 this.http.get('http://localhost:59520/api/ProjectTask').subscribe(
       data => { 
        this.tasks=data; 
     });
   }
 
 onClickSubmit(task){
   console.log(task);
   this.http.post('http://localhost:59520/api/ProjectTask',task).subscribe(
     data => {
       console.log('saved successfully');
       this.router.navigate(['/projecttask/show']);
     }
   );
  }
}
