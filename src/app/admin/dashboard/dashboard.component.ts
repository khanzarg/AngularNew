import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { pokemon } from '../model/model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pokemonList: pokemon[] 
  x = [];
  constructor() { }

  ngOnInit(): void {
    ; (async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
      this.pokemonList = response.data.results
      for (var i = 1; i < this.pokemonList.length+ 1; i++) {
        this.pokemonList[i - 1].img = "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
        this.pokemonList[i - 1].id = i;
      }
      console.log(this.x)
      console.log(this.pokemonList)
    })()
  }

}
