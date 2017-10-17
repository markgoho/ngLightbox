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
  selector: 'app-lightbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="lightbox" (click)="hideBox()">
      <img [src]="picture.imgPath">
    </div>
  `,
  styles: [
    `
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 50%;
    }
  `
  ]
})
export class LightboxComponent implements OnInit {
  @Input() picture: Picture;

  @Output() hide = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  hideBox() {
    this.hide.emit(false);
  }
}
