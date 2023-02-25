import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InfoheroeComponent} from './components/infoheroe/infoheroe.component';
import { BuscadorComponent} from './components/buscador/buscador.component';


const routes: Routes = [
  /*{ path: '', component: HomeComponent },*/
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/infoheroe/:id', component: InfoheroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent }
  /*{ path: '**', pathMatch: 'full', redirectTo: '/home' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
