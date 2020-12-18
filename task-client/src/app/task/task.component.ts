import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from '../../model/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;
  @Output()
  change = new EventEmitter();
  @Output()
  delete = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.task)
    let date = this.task.createdOn
    //this.task.createdOn =date.dayOfMonth date.dayOfMonth
  }

  onChange(){
    this.task.checked = !this.task.checked;
    this.change.emit();
  }

  onDelete(){
    this.delete.emit();
  }



}
