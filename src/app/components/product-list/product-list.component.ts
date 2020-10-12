import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  performFilter(listFilter: string): any {
    const filterBy = listFilter.toLocaleLowerCase();
    return this.products.filter(p => p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  showImage: boolean= true;
  
  _listFilter:string;
  filterProducts: any;
  products: IProduct[];
  errorMessage: string;
  get listFilter(): string{
    return this._listFilter
  }
  set listFilter(value:string){
    this._listFilter= value;
    this.filterProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
  }
  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    console.log("Product-list");
   this.productService.getProducts().subscribe({

     next:products => {this.products = products;
      this.filterProducts = this.products;
    }, 
     error: err => this.errorMessage = err
     
   });

  }
  OnNotify(rating:number){
    console.log("current rating from parent"+ rating);
  }
  toggleImage(){
    this.showImage = !this.showImage;
  }
  pageTitle: string = 'Product List';


}
