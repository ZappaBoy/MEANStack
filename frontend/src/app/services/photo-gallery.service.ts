import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotoGalleryService {

  constructor(private http: HttpClient) {
  }

  getImages() {
    return this.http.get<any>('assets/homepage/photos.json')
      .toPromise()
      .then(res => <typeof Image[]>res.data)
      .then(data => {
        return data;
      });
  }

}
