import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodosDataService } from '../service/data/todos-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number;
  todo:Todo;
  msg:string;

  constructor(private service:TodosDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'', false, new Date());
    if(this.id != -1){
    this.service.retrieveTodo('soumyadeep',this.id).subscribe(
      data => this.todo = data
    );
    }
  }
  saveTodo(){
    if(this.id === -1){
      this.service.createTodo('soumyadeep',this.todo).subscribe();
    }
    else{
    this.service.updateTodo('soumyadeep',this.id, this.todo).subscribe();
    this.msg = "Todos Updated";
    }
    this.router.navigate(['todos']);
  }

}
