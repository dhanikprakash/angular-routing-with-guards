import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import {HttpClientModule} from'@angular/common/http';
import { ProductDetaillsComponent } from './product-detaills/product-detaills.component';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetaillsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"products", component:ProductListComponent},
      {path:"products/:id", canActivate:[ProductDetailGuard], component:ProductDetaillsComponent},
      {path:"welcome", component:WelcomeComponent},
      {path:"", redirectTo:"welcom", pathMatch:"full"}, 
      {path:"**", redirectTo:"welcome", pathMatch:"full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
