import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'

  constructor(private httpClient: HttpClient) { 

  }

  public getProducts(): Observable<IProduct[]>{   //devuelve un obseervabled e tipo IProdcut
    return this.httpClient.get<IProduct[]>(this.baseURL);
  }
/*
  **En el caso que queramos añadirle un parametro como por ejemplo la ordenacion ascendente o descendente
  public getProducts(sort?: string): Observable<IProduct[]>{
    const params = sort ? `sort=${sort}` : '';
    return this.httpClient.get<IProduct[]>(`${this.baseURL}?sort=${params}`);
  }
*/
  public getProductById(id: number): Observable<IProduct>{    //devuelve un Observable de un producto
    return this.httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getCategories(): Observable<Category[]>{   //devuelve un Observable de tipo Category
    return this.httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }
 
  public postProduct(product: IProduct): Observable<IProduct>{      // se utiliza el metodo post para añadir un nuevo producto
    return this.httpClient.post<IProduct>(`${this.baseURL}`,product);

  }


  public putProduct(id: number, product: IProduct): Observable<IProduct>{      // se utiliza el metodo put para actualizar un producto
    return this.httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);

  }

  public deleteProduct(id: number): Observable<IProduct>{      // se utiliza el metodo delete para borrar un producto
    return this.httpClient.delete<IProduct>(`${this.baseURL}/${id}`);

  }
}
