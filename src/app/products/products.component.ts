import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ApiService } from '../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

 // productsList = productsList     prueba con mock
  productsList: IProduct[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((result: IProduct[]) =>{
      console.log(result);
      this.productsList = result;
    })
  }

}
