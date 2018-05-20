import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
formData:FormGroup;
  constructor(private http: HttpClient,private router: Router) { }
  employees;

 
  ngOnInit() {
   this.formData=new FormGroup({
     name:new FormControl ('',[Validators.required]),     
     designation: new FormControl('',[Validators.required]), 
     mgrid: new FormControl('',[Validators.required]),
     //contactno: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
     emailid: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
     skillsets: new FormControl('',[Validators.required])
    });
    this.showEmployees();
  }

  
showEmployees(){    
this.http.get('http://localhost:59520/api/Emp').subscribe(
      data => { 
       this.employees=data; 
    });
  }

onClickSubmit(employee){
  console.log(employee);
  this.http.post('http://localhost:59520/api/Emp',employee).subscribe(
    data => {
      console.log('saved successfully');
      this.router.navigate(['/employee/show']);
    }
  );
}
}