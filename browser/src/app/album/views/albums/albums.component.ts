import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../interfaces/album.interface';
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
  photos: Array<Photo> = [];
  albumId: string = '';
  loading = false;
  notItemsMessage: string = '';

  ngOnInit(): void {
    this.subscribeToRouteChanges();
  }

  subscribeToRouteChanges() {
    this.store
      .select(selectQueryParams)
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap((params: { [key: string]: string }) => {
          this.notItemsMessage = params['albumId']
            ? 'No photos found'
            : 'Enter an album id, for example 1';
          this.albumId = params['albumId'] ? params['albumId'] : '';
          this.loading = true;
          return this.albumService.fetchAlbumById(this.albumId);
        })
      )
      .subscribe((photos: Array<Photo>) => {
        this.photos = photos;
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
