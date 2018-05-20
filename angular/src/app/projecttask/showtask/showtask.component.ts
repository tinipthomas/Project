import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {

  constructor(private http:HttpClient) { }
tasks;
  ngOnInit() {
    this.loadTasks();
  }
  loadTasks()
{
  this.http.get("http://localhost:59520/api/ProjectTask").subscribe(
    data=>{
      console.log(data);

      this.tasks=data;
    }
  );
  }

}
