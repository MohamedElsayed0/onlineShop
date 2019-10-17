import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component'; 
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { NewProductComponent } from './Admin/new-product/new-product.component';
import { LogInComponent } from './log-in/log-in.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditeUserInfoComponent } from './user-profile/edite-user-info/edite-user-info.component';
import { AllOneCategoryComponent } from './all-one-category/all-one-category.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-profile/user-orders/user-orders.component';
import { UserAdressComponent } from './user-profile/user-adress/user-adress.component';
import { CheeckOutComponent } from './cheeck-out/cheeck-out.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { EditProductsComponent } from './Admin/edit-products/edit-products.component';

const routes: Routes = [
  { 
    path:'', component:HomeComponent
  },
  {
    path:'admin-products',component:AdminProductsComponent,canActivate:[AuthGuardService]
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'new-products',component:NewProductComponent,canActivate:[AuthGuardService]
  },
  {
    path:'edite-products/:id',component:EditProductsComponent,canActivate:[AuthGuardService]
  },
  {
    path:'login',component:LogInComponent
  },
  {
    path:'shopping-cart',component:ShoppingCartComponent
  },
  {
    path:'products-detail/:Pid',component:ProductDetailsComponent
  },
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'edit-User-Info/:uid',component:EditeUserInfoComponent,canActivate:[AuthGuardService]
  },
  {
    path:'all-one-ctegories',component:AllOneCategoryComponent
  },
  {
    path:'user-profile',component:UserProfileComponent,canActivate:[AuthGuardService],
    children:[
      {
        path:'',component:UserOrdersComponent
      },
      {
        path:'user-adress',component:UserAdressComponent
      },
      {
        path:'user-orders',component:UserOrdersComponent
      }
    ]
  },
  {
    path:'cheeck-out',component:CheeckOutComponent,canActivate:[AuthGuardService]
  },
  {
    path:'thank-you',component:ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
