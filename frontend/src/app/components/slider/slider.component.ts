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
        "thumbnailImageSrc": "assets/images/mean.png",
        "alt": "",
        "title": "MEAN stack"
      },
      {
        "thumbnailImageSrc": "assets/images/mongodb.png",
        "alt": "",
        "title": "MongoDB"
      },
      {
        "thumbnailImageSrc": "assets/images/express.png",
        "alt": "",
        "title": "Express"
      },
      {
        "thumbnailImageSrc": "assets/images/angular.png",
        "alt": "",
        "title": "Angular"
      },
      {
        "thumbnailImageSrc": "assets/images/nodejs.jpg",
        "alt": "",
        "title": "Node.js"
      }
    ]

    for (let asset of this.imagesAsset) {
      this.images.push(asset)
    }
  }
}
