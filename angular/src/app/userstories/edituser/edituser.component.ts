import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
  users;

  ngOnInit() {
    this.formData=new FormGroup({    
      story: new FormControl('',[]), 
      proid: new FormControl('',[])
     });
     this.showUsers();
     this.loadUsers();
  }

  showUsers()
  {
    this.http.get('http://localhost:59520/api/User').subscribe(
 
       data => { 
         this.users=data; 
       }
     ); 
  }

  loadUsers()
  {
    this.http.get(`http://localhost:59520/api/User/${this.id}`).subscribe(
 
       data => {
  
        console.log(data); 
         this.users = data; 
         this.formData=new FormGroup({  
          story: new FormControl(this.users.story,[Validators.required]), 
          proid: new FormControl(this.users.proid,[Validators.required])
        }); 
  }
);
}
onClickSubmit(user){ 
  console.log(user); 
  this.http.put(`http://localhost:59520/api/User/${this.id}`,user).subscribe( 
    data => { 
      console.log('saved successfully'); 
      this.router.navigate(['/user/show']); 
    } 
  );  
}
}
