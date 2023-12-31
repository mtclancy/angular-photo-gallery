import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
