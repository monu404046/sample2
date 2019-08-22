import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
Products:any;
View:boolean;
Cart=[];
  constructor() {
    this.Products=[{name:"printer",price:"800",company:"hp"},{name:"hardisk",price:"1000",company:"wd"},{name:"mouse",price:"100",company:"dell"}]
   }

  ngOnInit() {
  }
  public Add(p){
 
    this.Cart.push(p)
  }
  public delete(){
 
    this.Cart.pop()
  }
  public hide(){
 
    this.View=false
  }
  public view(){
 
    this.View=true
  }
}
