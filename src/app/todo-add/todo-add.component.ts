import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  name;
  country;
  @Output() newTodo = new EventEmitter();
  @Output() deleteToDo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const data = { name : this.name, country: this.country }
    this.newTodo.emit(data)
  }

  onDelete() {
    const data = { name : this.name, country: this.country }
    this.deleteToDo.emit(data)
  }

}
