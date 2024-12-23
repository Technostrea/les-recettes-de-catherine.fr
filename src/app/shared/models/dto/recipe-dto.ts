import {Category} from "@app/shared/models/category";

export interface RecipeDto {
  name: string
  picture: string
  preparationTimeMinutes: number
  cookingTimeMinutes: number
  tips: string
  categorieRecetteEnum: Category
}
