import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CustomFormsModule } from 'ng2-validation'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { EditProductsComponent } from './Admin/edit-products/edit-products.component';
import { NewProductComponent } from './Admin/new-product/new-product.component';
import { AllOneCategoryComponent } from './all-one-category/all-one-category.component';
import { CheeckOutComponent } from './cheeck-out/cheeck-out.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component'; 
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsCardComponent } from './products/products-card/products-card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-profile/user-orders/user-orders.component';
import { UserAdressComponent } from './user-profile/user-adress/user-adress.component';
import { EditeUserInfoComponent } from './user-profile/edite-user-info/edite-user-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({ 
  declarations: [
    AppComponent,
    AdminProductsComponent,
    EditProductsComponent,
    NewProductComponent,
    AllOneCategoryComponent,
    CheeckOutComponent,
    HomeComponent,
    LogInComponent,
    NavBarComponent,
    ProductsComponent,
    ProductsCardComponent,
    SearchComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    SignUpComponent,
    ThankYouComponent,
    UserProfileComponent,
    UserOrdersComponent,
    UserAdressComponent,
    EditeUserInfoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CustomFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
