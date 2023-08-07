import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'sort';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
