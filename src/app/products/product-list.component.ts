import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle = 'Product List!';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'cart';
  products: any[] = [
    {
      id: 1,
      productName: 'Macbook Pro M2',
      productCode: 'N220001',
      releaseDate: 'May 21, 2022',
      description: 'The new Macbook Pro with M2 chip',
      price: 25_000_000,
      starRating: 4.8,
      imageUrl: 'assets/image/mbp2.jpg',
    },
    {
      id: 2,
      productName: 'Dell XPS 13 Plus',
      productCode: 'N220002',
      releaseDate: 'August 10, 2022',
      description: 'The new model of XPS 13',
      price: 19_999_999,
      starRating: 4.1,
      imageUrl: 'assets/image/dell-xps.jpg',
    },
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
