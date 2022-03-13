import { Component, OnInit } from '@angular/core';
import Ingredient from '../../shared/ingrident.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Pepper",5),
    new Ingredient("Tomato",5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
