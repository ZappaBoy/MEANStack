import {Component, OnInit} from '@angular/core';
import {PhotoGalleryService} from "../services/photo-gallery.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoService: PhotoGalleryService) {
  }

  ngOnInit(): void {
    this.photoService.getImages().then(images => this.images = images);
  }
}
