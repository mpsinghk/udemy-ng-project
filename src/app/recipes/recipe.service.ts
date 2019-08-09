import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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
}
