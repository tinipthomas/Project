import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
  users;

  ngOnInit() {


    this.formData=new FormGroup({

      userstoryid:new FormControl ('',[]),     
      story: new FormControl('',[]), 
     proid: new FormControl('',[])
      });
    this.loadProject();
  }

  

  loadProject(){

    this.http.get(`http://localhost:59520/api/project/${this.id}`).subscribe(

      data => {
        console.log(data);
        this.users = data;
        this.formData=new FormGroup({ 
          userstoryid: new FormControl(this.users.userstoryid,[]),
          story: new FormControl(this.users.story,[]), 
          proid: new FormControl(this.users.proid,[])
        });
      } 
   );
  }

  
onClickSubmit(user){ 
   console.log(user);
    this.http.delete(`http://localhost:59520/api/User/${this.id}`).subscribe(
      data => {
        console.log('deleted successfully');
        this.router.navigate(['/user/show']);
      }
    );
  }

}
