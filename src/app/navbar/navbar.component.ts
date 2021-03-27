// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// Ronny's way:
// import { Component, OnInit, DoCheck} from '@angular/core';
// import { ShoppingcartService } from '../shoppingcart.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit, DoCheck {

//   itemCount: number;

//   constructor(private shoppingCartService: ShoppingcartService) { 
//     this.itemCount = this.updateCount();
//   }

//   ngDoCheck(): void {
//     this.itemCount = this.updateCount();
//   }

//   updateCount() : number {
//     return this.shoppingCartService.getItemCount()
//   }

//   ngOnInit(): void {
//   }

// }



// Serri's way to make a cart counting the items added to the cart *the number displayed next to the cart in the navbar)
// import { Component, OnInit, DoCheck } from '@angular/core';
// import { CartService } from "../cart.service";

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit, DoCheck {
//   cartLength;
//   constructor(private cartService : CartService) { }

//   ngOnInit(): void {
//   }

//   ngDoCheck(){
//     this.cartLength = this.cartService.itemsLength();
//   }

// }






import { Component, OnInit, DoCheck } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  shoppingCartLength;
  constructor(private shoppingCartService : ShoppingCartService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.shoppingCartLength = this.shoppingCartService.creaturesLength();

  }

}