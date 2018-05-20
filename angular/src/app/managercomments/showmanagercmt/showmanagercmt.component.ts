import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showmanagercmt',
  templateUrl: './showmanagercmt.component.html',
  styleUrls: ['./showmanagercmt.component.css']
})
export class ShowmanagercmtComponent implements OnInit {

  constructor(private http:HttpClient) { }
comments;
  ngOnInit() {
    this.loadComments();
  }
  loadComments()
{
  this.http.get("http://localhost:59520/api/Manager").subscribe(
    data=>{
      console.log(data);

      this.comments=data;
    }
  );
  }

}
