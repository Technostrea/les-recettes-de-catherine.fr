import {Ingredient} from "@app/shared/models/ingredient";
import {Step} from "@app/shared/models/step";

export interface Recipe {
  id: string;
  name: string;
  prepTime: number;
  imageUrl: string;
  category: string;
  difficulty: string;
  description: string;
  ingredients: Ingredient[];
  steps: Step[]

}
