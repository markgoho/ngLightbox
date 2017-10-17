import { Component } from '@angular/core';

import { PICTURES, Picture } from './picture';

@Component({
  selector: 'app-root',
  template: `
    <app-search-bar 
      (query)="onSearch($event)">
    </app-search-bar>
    
    <app-gallery 
      [pictures]="filteredPictures" 
      (selectedPic)="onSelect($event)">
    </app-gallery>
    
    <app-lightbox 
      *ngIf="showLightbox" 
      [picture]="lbPicture"
      (hide)="showLightbox = false">
    </app-lightbox>
  `,
  styles: []
})
export class AppComponent {
  filteredPictures = PICTURES;
  showLightbox = false;
  lbPicture = null;

  onSelect(picture: Picture) {
    this.showLightbox = true;
    this.lbPicture = picture;
  }

  onSearch(text: string) {
    if (!text) {
      this.filteredPictures = PICTURES;
    } else {
      const formattedText = text.trim().toLowerCase();
      this.filteredPictures = PICTURES.filter(
        picture => picture.caption.toLowerCase().search(formattedText) !== -1
      );
    }
  }
}
