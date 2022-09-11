import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List!';
  products: any[] = [
    {
      "id": 1,
      "productName": "Macbook Pro M2",
      "productCode": "N220001",
      "releaseDate": "May 21, 2022",
      "description": "The new Macbook Pro with M2 chip",
      "price": 1999.99,
      "starRating": 4.8,
      "imageUrl": "assets/image/macbook-pro-m2.jpg"
    },
    {
      "id": 2,
      "productName": "Dell XPS 13 Plus",
      "productCode": "N220002",
      "releaseDate": "August 10, 2022",
      "description": "The new model of XPS 13",
      "price": 1799.19,
      "starRating": 4.1,
      "imageUrl": "assets/image/xps-13-plus.jpg"
    }
  ];
}
