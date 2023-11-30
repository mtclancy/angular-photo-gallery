import { NgModule } from '@angular/core';
import { AlbumContainerComponent } from './views/album-container/album-container.component';
import { AlbumsComponent } from './views/albums/albums.component';
import { AlbumRoutingModule } from './routing/album.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, AlbumRoutingModule],
  exports: [],
  declarations: [AlbumContainerComponent, AlbumsComponent],
  providers: [],
})
export class AlbumModule {}
