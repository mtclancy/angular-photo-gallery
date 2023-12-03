import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumsComponent } from "../views/albums/albums.component";
import { AlbumContainerComponent } from "../views/album-container/album-container.component";

const routes: Routes = [
  {
    path: '',
    component: AlbumContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AlbumsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlbumRoutingModule{}
