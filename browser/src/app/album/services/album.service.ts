import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Photo } from '../interfaces/album.interface';

@Injectable()
export class AlbumService {
  constructor(private http: HttpClient) {}

  fetchAlbumById(id: string) {
    const params = new HttpParams().set('albumId', id);

    return this.http.get<Array<Photo>>(`${environment.albumApiUrl}`, {
      params,
    });
  }
}
