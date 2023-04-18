import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Todo List';
    name  = 'George';
    age = 42;
    foto = 'https://reqres.in/img/faces/6-image.jpg';
}
