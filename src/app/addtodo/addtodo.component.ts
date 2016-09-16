import { Component, OnInit } from '@angular/core';

import { TodoService } from './../shared';

@Component({
  selector: 'my-todo-add',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddTodoComponent implements OnInit {
    todo: string;

    constructor(private todoService: TodoService) {
        // Do stuff
    }

    ngOnInit() {
    }

    onCreateTodo () {
        if (this.todo && this.todo.length) {
            this.todoService.addTodo(this.todo);
            this.todo = '';
        }
    }
}
