import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChichenItzaComponent } from './chichen-itza/chichen-itza.component';
import { ChristtheRedeemerComponent } from './christthe-redeemer/christthe-redeemer.component';
import { ColosseumComponent } from './colosseum/colosseum.component';
import { GreatWallofChinaComponent } from './great-wallof-china/great-wallof-china.component';
import { MachuPicchuComponent } from './machu-picchu/machu-picchu.component';
import { PetraComponent } from './petra/petra.component';
import { TajMahalComponent } from './taj-mahal/taj-mahal.component';

const routes: Routes = [
 { path:'chichen-itza', component:ChichenItzaComponent},
 { path:'christthe-redeemer', component:ChristtheRedeemerComponent},
 { path:'colosseum', component:ColosseumComponent},
 { path:'great-wallof-china', component:GreatWallofChinaComponent},
 { path:'machu-picchu', component:MachuPicchuComponent},
 { path:'petra', component:PetraComponent},
 { path:'taj-mahal', component:TajMahalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
