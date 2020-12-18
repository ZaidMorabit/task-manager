import { Injectable } from '@angular/core';
import {Observable, Subject,} from 'rxjs';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskChangeEventService {
  //TODO: is there a better way to do that?
  static tasks: Subject<Task> = new Subject<Task>();
  constructor() {  }

}
