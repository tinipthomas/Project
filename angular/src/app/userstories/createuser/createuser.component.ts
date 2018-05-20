import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  formData:FormGroup;
  constructor(private http: HttpClient,private router: Router) { }
users;
  ngOnInit() {
    this.formData=new FormGroup({         
      story: new FormControl('',[Validators.required]), 
      proid: new FormControl('',[Validators.required])
     });
     this.showUsers();
   }
 
   
   showUsers(){    
 this.http.get('http://localhost:59520/api/User').subscribe(
       data => { 
        this.users=data; 
     });
   }
 
 onClickSubmit(user){
   console.log(user);
   this.http.post('http://localhost:59520/api/User',user).subscribe(
     data => {
       console.log('saved successfully');
       this.router.navigate(['/user/show']);
     }
   );
  }
}
