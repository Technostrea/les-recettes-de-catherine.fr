import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "@app/shared/models/recipe";

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: Recipe[], searchTerm: string, selectedCategory: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchTerm && !selectedCategory) {
      return items;
    }

    return items.filter(item => {
      const matchesSearch = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || item.categorieRecetteEnum.toUpperCase() === selectedCategory.toUpperCase();
      return matchesSearch && matchesCategory;
    });
  }

}
