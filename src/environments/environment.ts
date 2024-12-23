export const environment = {
  production: true,
  apiUrl: "https://rec-back.dev.technostrea.fr/api",
  authUrl:'https://pocketbase.dev.technostrea.fr',
  endpoints: {
    recipes: {
      GET_ALL_RECIPE:(page:number=0,size:number=10)=> `/recipe/all?page=${page}&size=${size}`,
      POST_STORE_RECIPE: `/recipe/create`
    },
    ingredients: {
      GET_ALL_INGREDIENT: `/ingredients`
    },
    step: {}
  }
};
