import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { AlbumService } from '../../services/album.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsComponent],
      imports: [HttpClientModule, CoreModule, LayoutsModule],
      providers: [AlbumService, HttpClient, Router, Store],
    });
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
