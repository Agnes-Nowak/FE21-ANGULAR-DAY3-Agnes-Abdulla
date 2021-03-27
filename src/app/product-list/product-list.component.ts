import { Component, OnInit } from '@angular/core';
import { animals } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  petsList = animals;

  constructor() { }

  ngOnInit(): void {
  }

}
