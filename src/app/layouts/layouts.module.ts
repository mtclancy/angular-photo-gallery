import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';
import { NoItemsComponent } from './components/no-items/no-items.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HamburgerMenuComponent,
    SearchBarComponent,
    CardComponent,
    LoadSpinnerComponent,
    NoItemsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    CardComponent,
    LoadSpinnerComponent,
    NoItemsComponent,
  ],
})
export class LayoutsModule {}
