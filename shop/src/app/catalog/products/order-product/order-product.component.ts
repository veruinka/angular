import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './../../../user.service';


@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css'],

})
export class OrderProductComponent implements OnInit {
  @Input() productName;
  @Input() productPrice;
  users;
  constructor(private userService:UserService) { 
   
  }

  ngOnInit(): void {
    this.users=this.userService.users;
  }

  order(user){
     console.log("<Užsakyta> produktas:"+this.productName+" vartotojas: "+user.value);
     this.userService.order(user.value,this.productName,this.productPrice);

  }

}
