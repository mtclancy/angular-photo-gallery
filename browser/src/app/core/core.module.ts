import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './routing/core.routing';
import { AppStoreModule } from './store/app.store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, AppRoutingModule, AppStoreModule],
})
export class CoreModule {}
