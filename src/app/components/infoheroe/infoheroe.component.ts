import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-infoheroe',
  templateUrl: './infoheroe.component.html',
  styleUrls: ['./infoheroe.component.css']
})
export class InfoheroeComponent {

  infoheroe: any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService){

    this.activatedRoute.params.subscribe(params => {
      //console.log(params['id']);
      this.infoheroe = this._heroesService.getInforHeroe(params['id']);
      console.log("get info heroe", this.infoheroe);
    })
  }


}
