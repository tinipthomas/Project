import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  e;

  ngOnInit() {
    this.loadEmployees();
  }
  loadEmployees(){
    this.http.get("http://localhost:59520/api/Emp").subscribe(data=>{console.log(data);
    this.e=data;});
  }

}
