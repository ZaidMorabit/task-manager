import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from 'src/model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = "http://localhost:8080/task_service/rest/task/"
  //private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private client:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.client.get<Task[]>(this.url);
  }

  postTask(task:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let body = new URLSearchParams(task).toString()

    return this.client.post<any>(this.url,body,httpOptions);
  }

  deleteTask(id:number):Observable<Task>{
    return this.client.delete<Task>(this.url + id);
  }

}
