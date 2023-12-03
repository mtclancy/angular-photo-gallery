import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { AlbumService } from '../../services/album.service';
import { CoreModule } from 'src/app/core/core.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Album } from '../../interfaces/album.interface';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.state';

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
      declarations: [AlbumsComponent],
      imports: [CoreModule, LayoutsModule, RouterTestingModule],
      providers: [
        { provide: AlbumService, useValue: albumMockService },
        provideMockStore({ initialState }),
      ],
    });

    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit', fakeAsync(() => {
    const queryParams = { albumId: '1' };
    const mockAlbums: Album[] = [
      {
        albumId: 1,
        id: 2,
        title: 'test title',
        url: 'url',
        thumbnailUrl: 'thumbnailUrl',
      },
    ];

    albumMockService.fetchAlbumById.and.returnValue(of(mockAlbums));
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();
    expect(albumMockService.fetchAlbumById).toHaveBeenCalledWith(
      queryParams.albumId
    );
  }));
});
