import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-showall-employ',
  templateUrl: './showall-employ.component.html',
  styleUrls: ['./showall-employ.component.css']
})
export class ShowallEmployComponent implements OnInit {

  constructor(private employeeService:EmployeeService) {

   }
   employees;

  ngOnInit() {
    this.employeeService.employee$.subscribe(
      data=>{
        this.employees=data;
        console.log(data);
      });
      this.employeeService.ErrorResponse$.subscribe(
        message=>{          
          console.log(message);
          alert(message);
        });
    this.employeeService.getAllemployee();
  }  
}
