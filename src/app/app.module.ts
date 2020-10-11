import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const appRoutes = [
  { path : '', redirectTo: '/todos-add', pathMatch : 'full'},
  { path: 'todos', component: TodosComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoAddComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
