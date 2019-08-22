import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
View:boolean;
  constructor() { }

  ngOnInit() {
  }
  public view(){
 /* if(this.View)
    this.View=false
    else 
    this.View=true */
    this.View=!this.View
  }
}
