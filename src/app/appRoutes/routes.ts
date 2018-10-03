import {Routes} from '@angular/router';
import {GridSystemComponent} from '../grid-system/grid-system.component';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { FlyingHeroesComponent } from '../flying-heroes/flying-heroes.component';
import { HeroAsyncMessageComponent } from '../hero-async-message/hero-async-message.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: GridSystemComponent
    },
    {
        path: 'hero/hero-list',
        component: HeroListComponent
    },
    {
        path: 'hero/hero-flying-hero',
        component: FlyingHeroesComponent
    },
    {
        path: 'hero/hero-async-message',
        component: HeroAsyncMessageComponent
    }
];
