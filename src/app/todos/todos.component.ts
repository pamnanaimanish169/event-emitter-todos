import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  data = [
    {"id" : 1, "name" : "TATA Motors", "country" : "India" },
    {"id" : 2, "name" : "Alfreds Futterkiste", "country" : "Germany" },
    {"id" : 3, "name" : "TESLA Motors", "country" : "USa" }
  ]

  constructor() { }

  ngOnInit() {
    
  }

  addNewTodo(event) {
    console.log(event)
    this.data.push(event)
    console.log(this.data)
  }

  deleteNewTodo(event) {
    
    this.data.forEach((element, key) => {
      console.log(element)
      console.log(event)
      console.log(element['id'] == event['id'])
      if (element['id'] == event['id']) {
        const index = this.data.indexOf(element);
        console.log( index )
        this.data.splice(index,1)
      }
    })
  }

}
