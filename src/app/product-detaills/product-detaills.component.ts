import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import {ActivatedRoute} from "@angular/router";
import { ProductService } from 'src/app/services/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-detaills',
  templateUrl: './product-detaills.component.html',
  styleUrls: ['./product-detaills.component.css']
})
export class ProductDetaillsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private productService: ProductService, private router:Router) { }
  pageTitle:string = "Product Detail";
  errorMessage: string;
  product:IProduct;


  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id");
    this.productService.getProducts().subscribe({

      next:products => {this.product = products.find(p => p.productId == id)

     }, 
      error: err => this.errorMessage = err
      
    });
  }
  onBack():void {
    this.router.navigate(['/products'])
  }

}
