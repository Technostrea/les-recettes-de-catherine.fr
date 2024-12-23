import {Ingredient} from "@app/shared/models/ingredient";
import {Step} from "@app/shared/models/step";

export interface Recipe {
  id: string
  name: string
  picture: string
  categorieRecetteEnum: string
  totalTimeMinutes: number
  preparationTimeMinutes: number
  cookingTimeMinutes: number
  tips: string
  ingredientRecipe: Ingredient[]
  steps: Step[]
}
