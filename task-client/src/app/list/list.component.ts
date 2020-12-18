import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../model/task';
import {TaskService} from '../../services/task.service';
import {TaskChangeEventService} from '../../services/task-change-event.service';
import {from, pipe, Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  private tasks = [];
  private subscription: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
      this.getTasks();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  //GET
  getTasks(){
    //TODO:refactor this function
    this.taskService.getTasks().subscribe(tasks =>{
      from(tasks).subscribe(task =>{
        TaskChangeEventService.tasks.next(task)
      });
    });

    this.subscription = TaskChangeEventService.tasks.subscribe(x =>{
      this.tasks.push(x)
    });
  }

  //Update
  onChange(task:Task){
    //TODO: implement the function
    //modify a task
    console.log("ca change sur la liste", task);
  }

  //Delete
  onDelete(task:Task){
    this.taskService.deleteTask(task.id).subscribe( task =>{
      let indexOfTask = this.tasks.map(x=>x.id).indexOf(task.id)
      this.tasks.splice(indexOfTask,1);
      });

  }
}
