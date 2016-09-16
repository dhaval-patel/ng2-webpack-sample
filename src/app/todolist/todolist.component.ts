import { Component, OnInit } from '@angular/core';

import { TodoService, ITodo } from './../shared';

@Component({
  selector: 'my-todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodoListComponent implements OnInit {
    todos: ITodo[];

    constructor(private todoService: TodoService) {
        // Do stuff
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }

    onDeleteTodo (todo: ITodo) {
        this.todoService.deleteTodo(todo);
    }

    onToggleCompleteTodo (todo: ITodo) {
        todo.completed = !todo.completed;
    }
}
