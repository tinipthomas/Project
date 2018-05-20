import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')

  projects;
  ngOnInit() {

    this.formData=new FormGroup({
      proid:new FormControl ('',[]),     
      proname: new FormControl('',[]), 
      clientname: new FormControl('',[]),
      startdate: new FormControl('',[]),
      enddate: new FormControl('',[]),
      
     });

     this.showProjects(); 
     this.loadProject();  
  }
  showProjects()
  {
    this.http.get('http://localhost:59520/api/Project').subscribe(
 
       data => { 
         this.projects=data; 
       }
     ); 
  }

  loadProject()
  {
    this.http.get(`http://localhost:59520/api/Project/${this.id}`).subscribe(
 
       data => {
  
        console.log(data); 
         this.projects = data; 
         this.formData=new FormGroup({
          proid:new FormControl (this.projects.proid,[Validators.required]),     
          proname: new FormControl(this.projects.proname,[Validators.required]), 
          clientname: new FormControl(this.projects.clientname,[Validators.required]),
          startdate: new FormControl(this.projects.startdate,[Validators.required]),
          enddate: new FormControl(this.projects.enddate,[Validators.required])
        }); 
  }
);
}
onClickSubmit(project){ 
  console.log(project); 
  this.http.put(`http://localhost:59520/api/Project/${this.id}`,project).subscribe( 
    data => { 
      console.log('saved successfully'); 
      this.router.navigate(['/project/show']); 
    } 
  );  
}
}
