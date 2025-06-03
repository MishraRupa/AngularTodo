import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTask:string="";
  tasks:string[]=[];

  addTask(){
    this.tasks.push(this.newTask);

  }

  removeTask(index:number){
    this.tasks.splice(index,1);

  }

}
