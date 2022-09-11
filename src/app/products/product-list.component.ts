import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = [];

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(v: string) {
    console.log("GET IN SETTER");
    this._listFilter = v;
    this.filteredProducts = this.performFilter(v);
  }

  products: IProduct[] = [
    {
      id: 1,
      productName: 'Macbook Pro M2',
      productCode: 'N22-0001',
      releaseDate: 'May 21, 2022',
      description: 'The new Macbook Pro with M2 chip',
      price: 25_000_000,
      starRating: 4.8,
      imageUrl: 'assets/image/mbp2.jpg',
    },
    {
      id: 2,
      productName: 'Dell XPS 13 Plus',
      productCode: 'N22-0002',
      releaseDate: 'August 10, 2022',
      description: 'The new model of XPS 13',
      price: 19_999_999,
      starRating: 4.1,
      imageUrl: 'assets/image/dell-xps.jpg',
    },
  ];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("GET IN INIT");
    this.listFilter = '';
  }
}
