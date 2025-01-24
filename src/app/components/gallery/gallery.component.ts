import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  photos: { filepath: string; webviewpath?: string}[] = [];

  constructor(private photoService: PhotoService){}

  async takePhoto(){
    await this.photoService.addPhoto();
    this.photos = this.photoService.getPhotos(); // update photos list
  }

  
  ngOnInit(): void {
      this.photos = this.photoService.getPhotos(); // Initialize photos when opening app
  }
}
