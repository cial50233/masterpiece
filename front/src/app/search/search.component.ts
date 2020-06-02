import { Component, OnInit } from '@angular/core';
import { Product, AdService } from '../services/adverts.service';
import { Heroes, HService } from '../services/heroes.service';

@Component({
  selector: 'app-search',
  providers: [AdService, HService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: Product[];
  heroes: Heroes[];
  searchText;

  constructor(adservice: AdService, hservice: HService) { 
    this.products = adservice.getProducts();
    this.heroes = hservice.getHeroes();
  }

  ngOnInit(): void {
  }

}
