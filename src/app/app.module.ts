import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LightboxComponent } from './lightbox/lightbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    GalleryComponent,
    LightboxComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
