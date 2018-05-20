import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-createmanagercmt',
  templateUrl: './createmanagercmt.component.html',
  styleUrls: ['./createmanagercmt.component.css']
})
export class CreatemanagercmtComponent implements OnInit {
  formData:FormGroup;
  constructor(private http: HttpClient,private router: Router) { }
comments;
  ngOnInit() {
    this.formData=new FormGroup({          
      comments: new FormControl('',[Validators.required]), 
      taskid: new FormControl('',[Validators.required])
     });
     this.showManager();
  }
  showManager(){    
    this.http.get('http://localhost:59520/api/Manager').subscribe(
          data => { 
           this.comments=data; 
        });
      }
    
    onClickSubmit(comment){
      console.log(comment);
      this.http.post('http://localhost:59520/api/Manager',comment).subscribe(
        data => {
          console.log('saved successfully');
          this.router.navigate(['/manager/show']);
        }
      );
    }
}
