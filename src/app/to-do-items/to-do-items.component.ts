import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { deals } from '../data';
// Установка руского языка и формата данных
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent {

    dealsList = deals;
    
    car = 'Mercedes';
    
    selectedItem: ToDoItem = this.dealsList[0];
    onSelect(item: ToDoItem): void {
        this.selectedItem = item;
    }
    info = false;
    
    deleteItem(): void {
        this.dealsList.pop();
    }

    getItems(): void {
        console.log(this.dealsList);
    }
}
