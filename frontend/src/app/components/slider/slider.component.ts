import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images: any[];
  imagesAsset: any;

  constructor() {
  }

  ngOnInit(): void {
    this.images = []

    this.imagesAsset = [
      {
        "thumbnailImageSrc": "assets/images/abstract1.png",
        "alt": "",
        "title": "Welcome..."
      },
      {
        "thumbnailImageSrc": "assets/images/abstract2.jpg",
        "alt": "",
        "title": "...to the future"
      }
    ]

    for (let asset of this.imagesAsset) {
      this.images.push(asset)
    }
  }
}
