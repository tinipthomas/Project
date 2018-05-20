import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.css']
})
export class DeleteprojectComponent implements OnInit {
  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
projects;

  ngOnInit() {
    this.formData=new FormGroup({

     proname: new FormControl('',[]), 
     clientname: new FormControl('',[]),
     startdate: new FormControl('',[]),
     enddate: new FormControl('',[])
      });
    this.loadProject();
  }

  

  loadProject(){

    this.http.get(`http://localhost:59520/api/Project/${this.id}`).subscribe(

      data => {
        console.log(data);
        this.projects = data;
        this.formData=new FormGroup({ 
          proname: new FormControl(this.projects.proname,[]),
          clientname: new FormControl(this.projects.clientname,[]),
          startdate: new FormControl(this.projects.startdate,[]),
          enddate: new FormControl(this.projects.enddate,[])
        });
      } 
   );
  }

  
onClickSubmit(project){ 
   console.log(project);
    this.http.delete(`http://localhost:59520/api/Project/${this.id}`).subscribe(
      data => {
        console.log('deleted successfully');
        this.router.navigate(['/project/show']);
      }
    );
  }

}
