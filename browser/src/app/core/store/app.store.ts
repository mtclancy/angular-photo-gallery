import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './router/custom-serializer';
import { EntityDataModule } from '@ngrx/data';
import { environment } from 'src/app/environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: CustomSerializer,
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],

  exports: [],
  declarations: [],
  providers: [],
})
export class AppStoreModule {}
