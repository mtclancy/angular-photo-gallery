import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumContainerComponent } from '../album/views/album-container/album-container.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlbumContainerComponent', () => {
  let component: AlbumContainerComponent;
  let fixture: ComponentFixture<AlbumContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumContainerComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(AlbumContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
