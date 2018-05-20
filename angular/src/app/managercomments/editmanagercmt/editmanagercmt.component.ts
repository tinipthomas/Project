import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editmanagercmt',
  templateUrl: './editmanagercmt.component.html',
  styleUrls: ['./editmanagercmt.component.css']
})
export class EditmanagercmtComponent implements OnInit {
  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')

  comments;
  ngOnInit() {


    this.formData=new FormGroup({
      mgrid:new FormControl ('',[]),     
      comments: new FormControl('',[]), 
      taskid: new FormControl('',[])
      });
    this.loadManagerCmts();
    this.showManagerCmts();
  }

  showManagerCmts(){
 
    this.http.get('http://localhost:59520/api/Manager').subscribe(

      data => { 
        this.comments=data; 
      }
    ); 
  }

  loadManagerCmts(){

    this.http.get(`http://localhost:59520/api/Manager/${this.id}`).subscribe(

      data => {
        console.log(data);
        this.comments = data;
        this.formData=new FormGroup({ 
          mgrid: new FormControl(this.comments.name,[]),
          comments: new FormControl(this.comments.designation,[]), 
          taskid: new FormControl(this.comments.mgrid,[])
        });
      } 
   );
  }

  
onClickSubmit(comment){ 
   console.log(comment);
    this.http.delete(`http://localhost:59520/api/Manager/${this.id}`).subscribe(
      data => {
        console.log('deleted successfully');
        this.router.navigate(['/manager/show']);
      }
    );
  }

}
