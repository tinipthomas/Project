import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  formData:FormGroup;
  constructor(private http: HttpClient,private router: Router) { }
projects;
  ngOnInit() {
    this.formData=new FormGroup({
      proname: new FormControl('',[Validators.required]), 
      clientname: new FormControl('',[Validators.required]),
      startdate: new FormControl('',[Validators.required]),
      enddate: new FormControl('',[Validators.required]),
      
     });
     this.showProjects();
   }
 
   
   showProjects(){    
 this.http.get('http://localhost:59520/api/Project').subscribe(
       data => { 
        this.projects=data; 
     });
   }
 
 onClickSubmit(project){
   console.log(project);
   this.http.post('http://localhost:59520/api/Project',project).subscribe(
     data => {
       console.log('saved successfully');
       this.router.navigate(['/project/show']);
     }
   );
  }
}