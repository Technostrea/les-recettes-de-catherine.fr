import{a as F,b as T,c as L}from"./chunk-IRK53LB5.js";import"./chunk-V5QC2QN4.js";import{a as M}from"./chunk-V7FGIMGM.js";import{b as B}from"./chunk-5PBKA4BQ.js";import"./chunk-6Z6IYR2N.js";import{Ba as v,Da as x,Na as S,O as l,W as c,_ as d,db as u,ea as y,fa as C,ga as a,ha as s,ia as f,na as _,p as o,ra as E,t as g,v as h,w as p,ya as R}from"./chunk-J2IPMSOX.js";var I=(e,n)=>n.id;function N(e,n){if(e&1&&f(0,"app-recipe-item-card",3),e&2){let t=n.$implicit;d("recipe",t)}}function b(e,n){e&1&&(a(0,"p"),E(1,"Aucune recette d'entr\xE9e trouv\xE9e"),s())}var j=(()=>{class e{constructor(){this.recipeService=g(B),this.recipes=c({}),this.searchTerm=c(""),this.selectedCategory=c("")}ngOnInit(){this.recipeService.getRecipesPaginate(0,10).subscribe(t=>{this.recipes.set(t)})}filterBySearchRecipes(t){this.searchTerm.set(t)}filterByCategoryRecipes(t){this.selectedCategory.set(t)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=h({type:e,selectors:[["app-entree-list"]],standalone:!0,features:[R],decls:8,vars:6,consts:[[1,"mt-[150px]","flex-1","flex","flex-col","my-8","space-y-8","min-h-[60vh]","w-full","place-content-center","place-items-center","gap-[10%]","bg-[#fff]","p-4","px-[20%]","max-md:flex-col","max-md:gap-[4%]","max-md:px-[5%]"],[3,"filteredRecipesOut","filteredByCategoryOut","category"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4"],[3,"recipe"]],template:function(i,r){i&1&&(f(0,"app-header"),a(1,"section",0)(2,"app-search-and-filter",1),_("filteredRecipesOut",function(m){return r.filterBySearchRecipes(m)})("filteredByCategoryOut",function(m){return r.filterByCategoryRecipes(m)}),s(),a(3,"div",2),y(4,N,1,1,"app-recipe-item-card",3,I,!1,b,2,0,"p"),v(7,"searchFilter"),s()()),i&2&&(l(2),d("category","entree".toLowerCase()),l(2),C(x(7,2,r.recipes().content,r.searchTerm(),r.selectedCategory())))},dependencies:[F,T,M,L],changeDetection:0})}}return e})();var A=[{path:"",component:j}],w=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=o({imports:[u.forChild(A),u]})}}return e})();var Y=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=o({imports:[S,w]})}}return e})();export{Y as EntreeModule};
