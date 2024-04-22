import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [new Ingredient ("tomate", 2), new Ingredient ("maçã", 4)];

  constructor(){}

  ngOnInit(){}

}
