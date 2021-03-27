import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animals } from '../products';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.css']
})
export class AnimalsDetailsComponent implements OnInit {
  pet: any;

  constructor(private route: ActivatedRoute, private shoppingCartService: ShoppingCartService) { }

  addToCart(pet) {
    window.alert('You have decided to get a new friend!');
    this.shoppingCartService.addToCart(pet);
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pet = animals[+params.get('petId')]
    });
  }
}
  // or should it be:
  // this.pet = petsList[+params.get('petId')];



// addToCart() function will accept one parameter and it will show you a message that your product has been added to the cart, then we will use the function addToCart from the ShoppingCartService to push that element to the items array.