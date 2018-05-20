import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')

  employee;


  ngOnInit() {
    
    this.formData=new FormGroup({

      name:new FormControl ('',[]),     
     designation: new FormControl('',[]), 
     mgrid: new FormControl('',[]),
     contactno: new FormControl('',[]),
     emailid: new FormControl('',[]),
     skillsets: new FormControl('',[])
      });
    this.loadEmployee();
  }

  

loadEmployee(){

    this.http.get(`http://localhost:59520/api/Emp/${this.id}`).subscribe(

      data => {
        console.log(data);
        this.employee = data;
        this.formData=new FormGroup({ 
         name: new FormControl(this.employee.name,[]),
         designation: new FormControl(this.employee.designation,[]), 
          mgrid: new FormControl(this.employee.mgrid,[]),
          contactno: new FormControl(this.employee.contactno,[]),
          emailid: new FormControl(this.employee.emailid,[]),
          skillsets: new FormControl(this.employee.skillsets,[])
        });
      } 
   );
  }

  
onClickSubmit(employee){ 
   console.log(employee);
    this.http.delete(`http://localhost:59520/api/Emp/${this.id}`).subscribe(
      data => {
        console.log('deleted successfully');
        this.router.navigate(['/employee/show']);
      }
    );
  }
}
