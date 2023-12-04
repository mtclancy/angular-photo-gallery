import { NgModule } from '@angular/core';
import { AlbumContainerComponent } from './views/album-container/album-container.component';
import { AlbumsComponent } from './views/albums/albums.component';
import { AlbumRoutingModule } from './routing/album.routing';
import { CommonModule } from '@angular/common';
import { AlbumService } from './services/album.service';
import { LayoutsModule } from '../layouts/layouts.module';
import { SharedModule } from '../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    AlbumRoutingModule,
    LayoutsModule,
    SharedModule,
    ScrollingModule,
  ],
  exports: [],
  declarations: [AlbumContainerComponent, AlbumsComponent],
  providers: [AlbumService],
})
export class AlbumModule {}
