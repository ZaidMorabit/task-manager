import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from 'src/app/model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(client:HttpClient) { }


}
