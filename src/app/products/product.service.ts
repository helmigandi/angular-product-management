import { IProduct } from './product';

export class ProductService {
  getProducts(): IProduct[] {
    return [
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
      {
        id: 3,
        productName: 'Acer Predator 2022',
        productCode: 'N22-0003',
        releaseDate: 'January 11, 2022',
        description: 'The new Predator Gaming',
        price: 13_000_000,
        starRating: 3.1,
        imageUrl: 'assets/image/mbp2.jpg',
      },
      {
        id: 4,
        productName: 'Lenovo Legion 5',
        productCode: 'N22-0004',
        releaseDate: 'February 19, 2022',
        description: 'The new model of Legion 5',
        price: 17_999_999,
        starRating: 4.3,
        imageUrl: 'assets/image/dell-xps.jpg',
      },
      {
        id: 5,
        productName: 'Asus ROG Strix 14',
        productCode: 'N22-0005',
        releaseDate: 'March 24, 2022',
        description: 'The new ROG Strix Monster',
        price: 18_000_000,
        starRating: 3.8,
        imageUrl: 'assets/image/mbp2.jpg',
      },
      {
        id: 6,
        productName: 'HP Omen 15',
        productCode: 'N22-0006',
        releaseDate: 'June 25, 2022',
        description: 'The new HP Omen',
        price: 21_000_000,
        starRating: 4.1,
        imageUrl: 'assets/image/dell-xps.jpg',
      },
    ];
  }
}
