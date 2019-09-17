import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Apple Pie',
            'This is apple pie',
            'https://storage.needpix.com/rsynced_images/apple-2740849_1280.png',
            [
                new Ingredient('Apple', 1),
                new Ingredient('Bread', 5)
            ]
        ),
        new Recipe(
            'Banana Shake',
            'This is banana shake',
            'https://www.maxpixel.net/static/photo/2x/Banana-Chia-Seeds-Smoothie-Blueberry-Granadilla-3193660.jpg',
            [
                new Ingredient('Orange', 5),
                new Ingredient('Banana', 2)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getReceipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
