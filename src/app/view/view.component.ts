import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
Name:String;
/* View:Boolean=false; */
Age:Number;
Email="abc";
Address;
Mobile=[];
Projects=[];
  constructor() { 


    this.Name = "ARJUN";
    this.Age =28;
    this.Email ="ashwin@gmail.com"
    this.Address ={houseno:"1000",street:"vallabhayi"}
    this.Mobile=["abc","def","fgh"]
    this.Projects=[{name:"proj1",duration:"15",enddate:"1/5/19"},{name:"proj2",duration:"30",enddate:"6/8/19"}]
  
  }

  ngOnInit() {
  }
public Add(){
  let data={name:"proj30",duration:"45",enddate:"5/7/19"}
  this.Projects.push(data)
}
}
