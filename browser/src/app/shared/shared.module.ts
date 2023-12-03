import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DownloadImageDirective } from './directives/download-image.directive';

@NgModule({
  declarations: [DownloadImageDirective],
  exports: [DownloadImageDirective],
  imports: [CommonModule],
  providers: [],
})
export class SharedModule {}
