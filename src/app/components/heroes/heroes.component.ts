import { Component, OnInit} from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor(private _heroesService:HeroesService, private router:Router) {
    //console.log("contructor listo");
  }

  ngOnInit(){
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe( idx:number ){
    this.router.navigate( ['heroes/infoheroe', idx]);
    //console.log(idx);
  }
}
