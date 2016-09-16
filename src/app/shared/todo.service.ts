import { Injectable } from '@angular/core';
import { ITodo } from './todo.model';

@Injectable()
export class TodoService {
    todos: ITodo[];

    constructor() {
        this.todos = [
            {
                id: Date.now(),
                todo: 'Learn Angular 2',
                completed: false
            }
        ];
    }

    getTodos (): ITodo[] {
        return this.todos;
    }

    addTodo (todoText: string): ITodo {
        let todo = {
            id: Date.now(),
            todo: todoText,
            completed: false
        };
        this.todos.push(todo);
        return todo;
    }

    deleteTodo (todo: ITodo): ITodo [] {
        this.todos.splice(this.todos.indexOf(todo), 1);
        return this.todos;
    }


}
