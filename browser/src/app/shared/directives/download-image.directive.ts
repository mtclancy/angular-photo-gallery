import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, Input } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Directive({
  selector: '[downloadImage]',
})
export class DownloadImageDirective {
  constructor(private http: HttpClient) {}

  @Input() fileUrl!: string;
  @Input() imageTitle = 'image.jpg';

  @HostListener('click') onClick() {
    this.downloadImage();
  }

  private downloadImage() {
    if (!this.fileUrl) {
      return;
    }
    const fileUrl = `${
      environment.proxyServerUrl
    }/proxy-image?url=${encodeURIComponent(this.fileUrl)}`;
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((blob) => {
      const imageBlob = new Blob([blob]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(imageBlob);
      link.download = this.imageTitle;

      link.style.display = 'none';
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }
}
