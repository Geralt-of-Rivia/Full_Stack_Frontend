import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosDataService } from '../service/data/todos-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  msg:string;

  constructor(private service:TodosDataService,private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.service.retrieveAllTodos('soumyadeep').subscribe(
      response => {
        //console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.service.deleteTodo('soumyadeep',id).subscribe();
    this.msg = `${id} value deleted`;
    this.refreshTodos();
  }

  updateTodo(id){
    this.router.navigate(['todos',id]);

  }

  addTodo(){
    this.router.navigate(['todos/-1']);
  }


}
