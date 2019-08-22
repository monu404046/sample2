import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
n1:number;
n2:number;
res:number;
  constructor() { }

  ngOnInit() {
  }
public add(){
this.res=this.n1+this.n2
}
public diff(){
  this.res=this.n1-this.n2
}
}
