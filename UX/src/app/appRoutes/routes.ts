import {Routes} from '@angular/router';
import {GridSystemComponent} from '../grid-system/grid-system.component';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { FlyingHeroesComponent } from '../flying-heroes/flying-heroes.component';
import { HeroAsyncMessageComponent } from '../hero-async-message/hero-async-message.component';
import { QuestionsComponent } from '../questions/questions.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: GridSystemComponent,
        pathMatch: 'full'
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
        component: HeroAsyncMessageComponent,
    },

    {
        path: 'admin/add-product',
        component: QuestionsComponent
    },

    {
        path: 'customer-list',
        loadChildren: '../customers/customers.module#CustomersModule'  //../app/view-one/view-one.module#ViewOneModule //() => import('../customers/customers.module').then(m=> m.CustomersModule)
    },
    {
        path: 'order-list',
        loadChildren: '../orders/orders.module#OrdersModule' //() => import('../orders/orders.module').then(o => o.OrdersModule)
    }
];
