import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[downloadImage]',
})
export class DownloadImageDirective {
  constructor(private http: HttpClient) {}

  @Input() fileUrl!: string;

  @HostListener('click') onClick() {
    this.downloadImage();
  }

  private downloadImage() {
    if (!this.fileUrl) {
      return;
    }

    this.http.get(this.fileUrl, { responseType: 'blob' }).subscribe((blob) => {
      const imageBlob = new Blob([blob]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(imageBlob);
      link.download = 'image.jpg';

      link.style.display = 'none';
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }
}
