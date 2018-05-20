import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
tasks;

  ngOnInit() {
    this.formData=new FormGroup({          
      assignedto: new FormControl('',[]), 
      userstoryid: new FormControl('',[]),
      tstartdate: new FormControl('',[]),
      tenddate: new FormControl('',[]),
      tcompletion: new FormControl('',[])
     });
     this.showTasks(); 
     this.loadTasks(); 
    }
    showTasks(){
 
    

      this.http.get('http://localhost:59520/api/ProjectTask').subscribe(
  
        data => { 
          this.tasks=data; 
        }
      ); 
    }
  
    
  
    loadTasks(){ 
      this.http.get(`http://localhost:59520/api/ProjectTask/${this.id}`).subscribe(
  
        data => {
   
         console.log(data); 
          this.tasks = data; 
          this.formData=new FormGroup({
            assignedto: new FormControl(this.tasks.assignedto,[Validators.required]),  
            userstoryid: new FormControl(this.tasks.userstoryid,[Validators.required]), 
            tstartdate: new FormControl(this.tasks.tstartdate,[Validators.required]), 
            tenddate: new FormControl(this.tasks.tenddate,[Validators.required]), 
            tcompletion: new FormControl(this.tasks.tcompletion,[Validators.required]) 
          }); 
        } 
      ); 
  }
  
    
  
  onClickSubmit(task){ 
      console.log(task); 
      this.http.put(`http://localhost:59520/api/ProjectTask/${this.id}`,task).subscribe( 
        data => { 
          console.log('saved successfully'); 
          this.router.navigate(['/projecttask/show']); 
        } 
      );  
   }
 }
