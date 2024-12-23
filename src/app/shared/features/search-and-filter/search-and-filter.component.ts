import {Component, Input, OnInit, output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.scss'
})
export class SearchAndFilterComponent implements OnInit {
  @Input({required: true}) category: string = '';

  searchTerm: string = '';
  selectedCategory: string = '';

  filteredRecipesOut = output<string>()
  filteredByCategoryOut = output<string>()

  ngOnInit() {
    this.selectedCategory = this.category;
    this.filteredByCategoryOut.emit(this.selectedCategory.toUpperCase());
  }

  onSearchChange(): void {
    this.filteredRecipesOut.emit(this.searchTerm);
  }

  onCategoryChange(): void {
    this.filteredByCategoryOut.emit(this.selectedCategory.toUpperCase());
  }

}
