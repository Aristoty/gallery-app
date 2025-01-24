import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos: {filepath: string; webviewPath?: string}[] = [];

  async addPhoto(){
    const photo = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    this.photos.unshift({
      filepath: '',
      webviewPath: photo.webPath,
    })

  }

  getPhotos(){
    return this.photos;
  }
}
