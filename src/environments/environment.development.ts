export const environment = {
  production: false,
  apiUrl: "http://localhost:8080/api",
  authUrl:'https://pocketbase.dev.technostrea.fr',
  endpoints: {
    recipes: {
      GET_RECIPE_PICTURE:(pictureName: string)=> `http://localhost:8080/pictures/${pictureName}`,
      GET_ALL_RECIPE:()=> `${environment.apiUrl}/recipes`,
      GET_RECIPE:(recipeId: string)=> `${environment.apiUrl}/recipe/${recipeId}`,
      GET_ALL_RECIPE_PAGINATE:(page:number=0,size:number=10)=> `${environment.apiUrl}/recipe/all?page=${page}&size=${size}`,
      POST_STORE_RECIPE:()=>`${environment.apiUrl}/recipe/create`,
      POST_UPLOAD_RECIPE_PICTURE:(recipeId: string)=>`${environment.apiUrl}/recipe/uploadRecipePictures/${recipeId}`,
      PUT_RECIPE:(recipeId: string)=>`${environment.apiUrl}/recipe/update/${recipeId}`,
      DELETE_RECIPE:(recipeId: string)=>`${environment.apiUrl}/recipe/delete/${recipeId}`
    },
    ingredients: {
      GET_ALL_INGREDIENT:()=>`${environment.apiUrl}/ingredients`,
      GET_INGREDIENT:(ingredientID: string)=>`${environment.apiUrl}/ingredient/${ingredientID}`,
      GET_ALL_INGREDIENT_PAGINATE:(page:number=0,size:number=10)=>`${environment.apiUrl}/ingredient/all?page=${page}&size=${size}`,
      POST_STORE_INGREDIENT:()=>`${environment.apiUrl}/ingredient/create`,
      PUT_INGREDIENT:(ingredientID: string)=>`${environment.apiUrl}/ingredient/update/${ingredientID}`,
      DELETE_INGREDIENT:(ingredientID: string)=>`${environment.apiUrl}/ingredient/delete/${ingredientID}`,
    },
    step: {
      GET_ALL_STEP:()=>`${environment.apiUrl}/step`,
      GET_STEP:(stepId: string)=>`${environment.apiUrl}/step/${stepId}`,
      GET_ALL_STEP_PAGINATE:(page:number=0,size:number=10)=>`${environment.apiUrl}/step/all?page=${page}&size=${size}`,
      POST_STORE_STEP:()=>`${environment.apiUrl}/step/create`,
      PUT_STEP:(stepId: string)=>`${environment.apiUrl}/step/update/${stepId}`,
      DELETE_STEP:(stepId: string)=>`${environment.apiUrl}/step/delete/${stepId}`,
    },
    recipeIngredients: {
      GET_ALL_RECIPE_INGREDIENT:()=>`${environment.apiUrl}/ingredient_recipe`,
      GET_RECIPE_INGREDIENT_BY_RECIPE:(recipeId: string)=>`${environment.apiUrl}/ingredient_recipe/findByRecipeId/${recipeId}`,
      GET_RECIPE_INGREDIENT:(recipeId: string, ingredientId: string)=>`${environment.apiUrl}/ingredient_recipe?idRecipe=${recipeId}&idIngredient=${ingredientId}`,
      GET_ALL_RECIPE_INGREDIENT_PAGINATE:(page:number=0,size:number=10)=>`${environment.apiUrl}/ingredient_recipe/all?page=${page}&size=${size}`,
      POST_STORE_RECIPE_INGREDIENT:()=>`${environment.apiUrl}/ingredient_recipe/create`,
      PUT_RECIPE_INGREDIENT:(recipeId: string, ingredientId: string)=>`${environment.apiUrl}/ingredient_recipe/update?idRecipe=${recipeId}&idIngredient=${ingredientId}`,
      DELETE_RECIPE_INGREDIENT:(recipeId: string, ingredientId: string)=>`${environment.apiUrl}/ingredient_recipe/delete?idRecipe=${recipeId}&idIngredient=${ingredientId}`,
    },
  }
};
