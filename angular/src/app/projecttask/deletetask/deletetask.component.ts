import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {

  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
  tasks;

  ngOnInit() {


    this.formData=new FormGroup({

      protaskid:new FormControl ('',[]),     
      assignedto: new FormControl('',[]), 
      userstoryid: new FormControl('',[]),
      tstartdate: new FormControl('',[]),
     tenddate: new FormControl('',[]),
     tcompletion: new FormControl('',[])
      });
    this.loadProject();
  }

  

  loadProject(){

    this.http.get(`http://localhost:59520/api/ProjectTask/${this.id}`).subscribe(

      data => {
        console.log(data);
        this.tasks = data;
        this.formData=new FormGroup({ 
          protaskid: new FormControl(this.tasks.protaskid,[]),
          assignedto: new FormControl(this.tasks.assignedto,[]), 
          userstoryid: new FormControl(this.tasks.userstoryid,[]),
          tstartdate: new FormControl(this.tasks.tstartdate,[]),
          tenddate: new FormControl(this.tasks.tenddate,[]),
          tcompletion: new FormControl(this.tasks.tcompletion,[])
        });
      } 
   );
  }

  
onClickSubmit(task){ 
   console.log(task);
    this.http.delete(`http://localhost:59520/api/ProjectTask/${this.id}`).subscribe(
      data => {
        console.log('deleted successfully');
        this.router.navigate(['/projecttask/show']);
      }
    );
  }

}
