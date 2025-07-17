import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-component',
  imports: [CommonModule],
  templateUrl: './slider-component.html',
  styleUrl: './slider-component.css'
})
export class SliderComponent {
   images = [
    'https://www.wsupercars.com/wallpapers-regular/BMW/2025-BMW-Skytop-001-2160.jpg',
    'https://www.wsupercars.com/wallpapers-regular/BMW/2026-BMW-M2-CS-001-2160.jpg',
    'https://www.wsupercars.com/wallpapers-regular/Mercedes-Benz/2025-Mercedes-AMG-GT-XX-Concept-001-2160.jpg'
  ];

  currentIndex: number = 0;
  selectedImage: string | null = null;

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  openModal(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

  share() {
    alert('تمت المشاركة');
  }

  favorite() {
    alert('تمت الإضافة إلى المفضلة');
  }

  get currentImage(): string {
    return this.images[this.currentIndex];
  }
}
