import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { GreatWallofChinaComponent } from './great-wallof-china/great-wallof-china.component';
import { ChichenItzaComponent } from './chichen-itza/chichen-itza.component';
import { PetraComponent } from './petra/petra.component';
import { MachuPicchuComponent } from './machu-picchu/machu-picchu.component';
import { ChristtheRedeemerComponent } from './christthe-redeemer/christthe-redeemer.component';
import { ColosseumComponent } from './colosseum/colosseum.component';
import { TajMahalComponent } from './taj-mahal/taj-mahal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    GreatWallofChinaComponent,
    ChichenItzaComponent,
    PetraComponent,
    MachuPicchuComponent,
    ChristtheRedeemerComponent,
    ColosseumComponent,
    TajMahalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
