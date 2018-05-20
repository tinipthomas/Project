import { Injectable } from '@angular/core';
import{ CrudService }from './crud.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
baseUrl='http://localhost:59520';
  private employee = new Subject<any>();
  employee$=this.employee.asObservable();//for observe
  private ErrorResponse=new Subject<any>();
  ErrorResponse$=this.ErrorResponse.asObservable();

  constructor(private crudService:CrudService) { }
  getAllemployee()
  {
    const url=`${this.baseUrl}/api/Emp`;
    this.crudService.Read(url).subscribe(data=>
      {this.employee.next(data);
    },error=>{console.log(error);
      this.ErrorResponse.next(error)
  }); 
}
}