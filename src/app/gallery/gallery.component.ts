import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a 
      *ngFor="let picture of pictures" 
      [href]="picture.imgPath" 
      (click)="selectPhoto($event, picture)">
      <img [src]="picture.thumbPath">
    </a>
  `,
  styles: [
    `
    :host {
      margin: 0 auto;
      max-width: 50vw;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  `
  ]
})
export class GalleryComponent implements OnInit {
  @Input() pictures: Picture[];

  @Output() selectedPic = new EventEmitter<Picture>();

  constructor() {}

  ngOnInit() {}

  selectPhoto(event: MouseEvent, picture: Picture) {
    event.preventDefault();
    this.selectedPic.emit(picture);
  }
}
