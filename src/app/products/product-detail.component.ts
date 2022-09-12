import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product detail';

  constructor() { }

  ngOnInit(): void {
  }

}
