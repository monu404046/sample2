import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
View:boolean=false;
cust:String;
  constructor() { }

  ngOnInit() {
  }
  public view(){
    
       this.View=!this.View
     }
}
