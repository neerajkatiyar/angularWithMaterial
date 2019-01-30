import {Pipe} from '@angular/core';
import { FlyingHeroesPipe } from '../pipes/flyingHeroes.pipe';

@Pipe({
    name: 'flyingHeroesImpure',
    pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe{}

