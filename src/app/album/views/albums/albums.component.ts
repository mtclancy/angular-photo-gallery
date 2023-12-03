import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../interfaces/album.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectQueryParams } from 'src/app/core/store/router/router.selectors';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  constructor(
    private albumService: AlbumService,
    private router: Router,
    private store: Store
  ) {}

  unsubscribe$ = new Subject();
  albums: Array<Album> = [];
  albumId: string = '';
  loading = false;

  ngOnInit(): void {
    this.store
      .select(selectQueryParams)
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap((params: { [key: string]: string }) => {
          this.albumId = params['albumId'] ? params['albumId'] : '';
          this.loading = true;
          return this.albumService.fetchAlbumById(this.albumId);
        })
      )
      .subscribe((albums: Array<Album>) => {
        this.albums = albums;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  updateSearch(search: string) {
    this.router.navigate(['/album'], { queryParams: { albumId: search } });
  }
}
