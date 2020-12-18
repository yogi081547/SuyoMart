import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'sm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Observable<any> ;
  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.products = this.productDataService.getAllProducts();
  }

}
