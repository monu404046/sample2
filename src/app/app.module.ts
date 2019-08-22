import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NameComponent } from './name/name.component';
import { CalculateComponent } from './calculate/calculate.component';
import { MarkComponent } from './mark/mark.component';
import { HederComponent } from './heder/heder.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ViewComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    NameComponent,
    CalculateComponent,
    MarkComponent,
    HederComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
