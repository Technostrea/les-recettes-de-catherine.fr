export const environment = {
  production: false,
  apiUrl: "https://rec-back.dev.technostrea.fr/api",
  authUrl:'https://pocketbase.dev.technostrea.fr',
  endpoints: {
    recipes: {
      GET_ALL_RECIPE:()=> `${environment.apiUrl}/recipes`,
      GET_ALL_RECIPE_PAGINATE:(page:number=0,size:number=10)=> `${environment.apiUrl}/recipe/all?page=${page}&size=${size}`,
      POST_STORE_RECIPE:()=>`${environment.apiUrl}/recipe/create`
    },
    ingredients: {
      GET_ALL_INGREDIENT:()=>`${environment.apiUrl}/ingredients`,
      GET_ALL_INGREDIENT_PAGINATE:(page:number=0,size:number=10)=>`${environment.apiUrl}/ingredient/all?page=${page}&size=${size}`,
      POST_STORE_INGREDIENT:()=>`${environment.apiUrl}/ingredient/create`
    },
    step: {
      GET_ALL_STEP:()=>`${environment.apiUrl}/step`,
      GET_ALL_STEP_PAGINATE:(page:number=0,size:number=10)=>`${environment.apiUrl}/step/all?page=${page}&size=${size}`,
      POST_STORE_STEP:()=>`${environment.apiUrl}/step/create`
    },
    recipeIngredients: {
      GET_ALL_RECIPE_INGREDIENT:()=>`${environment.apiUrl}/ingredient_recipe`,
      GET_ALL_RECIPE_INGREDIENT_PAGINATE:(page:number=0,size:number=10)=>`${environment.apiUrl}/ingredient_recipe/all?page=${page}&size=${size}`,
      POST_STORE_RECIPE_INGREDIENT:()=>`${environment.apiUrl}/ingredient_recipe/create`
    },
  }
};
