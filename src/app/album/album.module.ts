import { NgModule } from '@angular/core';
import { AlbumContainerComponent } from './views/album-container/album-container.component';
import { AlbumsComponent } from './views/albums/albums.component';
import { AlbumRoutingModule } from './routing/album.routing';
import { CommonModule } from '@angular/common';
import { AlbumService } from './services/album.service';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  imports: [CommonModule, AlbumRoutingModule, LayoutsModule],
  exports: [],
  declarations: [AlbumContainerComponent, AlbumsComponent],
  providers: [AlbumService],
})
export class AlbumModule {}
