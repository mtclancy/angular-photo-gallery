import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { AlbumsComponent } from '../album/views/albums/albums.component';
import { AlbumService } from '../album/services/album.service';
import { CoreModule } from 'src/app/core/core.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Injectable } from '@angular/core';
import { Photo } from '../album/interfaces/album.interface';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.state';
import { SharedModule } from '../shared/shared.module';

@Injectable()
export class MockAlbumService {
  fetchAlbumById(id: string) {
    return of(['boo ya!']);
  }
}
describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;
  let store: MockStore<AppState>;
  let albumMockService: jasmine.SpyObj<AlbumService>;

  const initialState = {
    router: {
      state: {
        url: '/album',
        params: { testRouteParam: 'testRouteParam' },
        queryParams: { albumId: '1' },
      },
    },
  };

  beforeEach(() => {
    albumMockService = jasmine.createSpyObj('AlbumService', ['fetchAlbumById']);

    TestBed.configureTestingModule({
      teardown: { destroyAfterEach: true },
      declarations: [AlbumsComponent],
      imports: [CoreModule, LayoutsModule, RouterTestingModule, SharedModule],
      providers: [
        { provide: AlbumService, useValue: albumMockService },
        provideMockStore({ initialState }),
      ],
    });

    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('fetchAlbumById should be called', fakeAsync(() => {
    const queryParams = { albumId: '1' };
    const mockAlbums: Photo[] = [
      {
        albumId: 1,
        id: 2,
        title: 'test title',
        url: 'url',
        thumbnailUrl: 'thumbnailUrl',
      },
    ];

    albumMockService.fetchAlbumById.and.returnValue(of(mockAlbums));
    expect(component.photos).toEqual([]);
    fixture.detectChanges();
    tick(10);
    expect(component.photos).toEqual(mockAlbums);

    expect(albumMockService.fetchAlbumById).toHaveBeenCalledWith(
      queryParams.albumId
    );
  }));
});
