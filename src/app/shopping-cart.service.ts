import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  creatures = [];

  constructor() { }

  //no idea if "pet" should be used here (originally "product")
  addToCart(pet){
    this.creatures.push(pet);
  }

  // is that name mandatory? 
  getItems() {
    return this.creatures;
  }

  clearCart() {
    this.creatures = [];
  }
  creaturesLength() {
    return this.creatures.length;
  }

}


// The addToCart() method appends a product to an array of items.
// The getItems() method collects the items users add to the cart and returns each item with its associated quantity.
// The clearCart() method returns an empty array of items.