import { Component, OnInit } from '@angular/core';
import { Task } from 'src/model/task';
import {TaskService} from '../../services/task.service';
import {TaskChangeEventService} from '../../services/task-change-event.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

  title:string;

  constructor(private taskService: TaskService) { }



  ngOnInit(): void {
  }

  addTask(){
    let task = {
      title: this.title,
      content: ""
    }
    this.taskService.postTask(task).subscribe(x => {
      TaskChangeEventService.tasks.next(x);
    });

    this.title = "";
  }

}
