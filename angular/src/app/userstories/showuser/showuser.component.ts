import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {

  constructor(private http:HttpClient) { }
users;
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers()
{
  this.http.get("http://localhost:59520/api/User").subscribe(
    data=>{
      console.log(data);

      this.users=data;
    }
  );
  }

}
