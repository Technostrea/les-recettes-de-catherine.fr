import {Ingredient} from "@app/shared/models/ingredient";

export interface RecipeIngredient {
  ingredient: Ingredient
  quantity: number
  unity: string
}
