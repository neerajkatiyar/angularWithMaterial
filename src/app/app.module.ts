import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }          from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { PowerBoosterComponent } from './power-booster/power-booster.component';

import {FormsModule} from '@angular/forms';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';

//navbar
import { NavbarComponent } from './navbar/navbar.component'; 


// pipes import section start
import {ExponentialStrength} from './pipes/exponentialStrength.pipe';
import {FlyingHeroesPipe} from './pipes/flyingHeroes.pipe';
import {FlyingHeroesImpurePipe} from './pipes/flyingHeroesImpurePipe';
import {FetchJsonPipe} from './pipes/fetch-json.pipe';
// pipes import section end

// animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CustomMaterialModule} from '../modules/custom-material/customMaterial.module';// for angular material
//

import { GridSystemComponent } from './grid-system/grid-system.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'; 

// Forms Module
import {ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ExponentialStrength,
    PowerBoosterComponent,
    FlyingHeroesComponent,
    FlyingHeroesImpurePipe,
    HeroAsyncMessageComponent,
    HeroListComponent,
    HeroDetailComponent,
    FlyingHeroesPipe,
    FetchJsonPipe,
    NavbarComponent,
    GridSystemComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
