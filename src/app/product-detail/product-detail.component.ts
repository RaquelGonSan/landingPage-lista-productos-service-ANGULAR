import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, productsList } from '../products/products.mock';
import { IProduct } from '../interfaces/product.interface';
import { ApiService } from '../services';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

 // product?: Product;      //prueba con mock
  //productsList: Product[] = productsList   // prueba con mock
  product?: IProduct;
  //productList: IProduct[] = [];
  loading: boolean = true;
  color: string='';

  constructor(private route: ActivatedRoute, private apiService: ApiService){ }
  


  ngOnInit(): void {
 
    this.route.params.subscribe({
      next: (params: Params) => {
     //   this.product = this.productsList.find(params => params.id == result['productId']);
          this.apiService.getProductById(Number(params['productId'])).subscribe({
            next: (data: IProduct) => {
              this.product = data
              this.color = this.product?.price as number > 200 ? 'red': ''
              this.loading = false;
            },
            error: (error:any) => {
              this.loading = false;
            }
        })
      },
      error: (error:any) => {


      }

    })
    
  }

}

