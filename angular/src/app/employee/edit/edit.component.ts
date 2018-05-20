import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')

  employees;


  ngOnInit() { 
       
    this.formData=new FormGroup({ 
      name: new FormControl('',[]),  
      designation: new FormControl('',[]),  
       mgrid: new FormControl('',[]), 
       emailid: new FormControl('',[]),  
      skillsets: new FormControl('',[])
  
    });
 
 
     this.showEmployees(); 
     this.loadEmployee();   
 }
   
 
 showEmployees(){
 
     this.http.get('http://localhost:59520/api/Emp').subscribe(
 
       data => { 
         this.employees=data; 
       }
     ); 
   }
 
   
 
 loadEmployee(){ 
     this.http.get(`http://localhost:59520/api/Emp/${this.id}`).subscribe(
 
       data => {
  
        console.log(data); 
         this.employees = data; 
         this.formData=new FormGroup({ 
           name: new FormControl(this.employees.name,[Validators.required]), 
           designation: new FormControl(this.employees.designation,[Validators.required]),  
           mgrid: new FormControl(this.employees.mgrid,[Validators.required]), 
          //  contactno: new FormControl(this.employee.contactno,[Validators.required,Validators.minLength(10),Validators.maxLength(12)]), 
           emailid: new FormControl(this.employees.emailid,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]), 
           skillsets: new FormControl(this.employees.skillsets,[Validators.required]) 
         }); 
       } 
     ); 
 }
 
   
 
 onClickSubmit(employee){ 
     console.log(employee); 
     this.http.put(`http://localhost:59520/api/Emp/${this.id}`,employee).subscribe( 
       data => { 
         console.log('saved successfully'); 
         this.router.navigate(['/employee/show']); 
       } 
     );  
  }
}
