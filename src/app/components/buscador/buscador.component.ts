import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
 
})
export class BuscadorComponent  implements OnInit {

  heroes:any[] = [];
  termino!: string;
  constructor(private activatedRoute:ActivatedRoute, 
              private _heroesService: HeroesService,  private router:Router){

  }

  ngOnInit(){

    this.activatedRoute.params.subscribe(params=> {
      this.termino = params['termino'];
      console.log("buscador", params['termino']); //con el activeRoute capturamos el termino de la URL
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });

  }

  verHeroe( idx:number ){
    this.router.navigate( ['heroes/infoheroe', idx]);
    //console.log(idx);
  }

}
