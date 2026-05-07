import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from '../../services/tour';
import { Tour } from '../../services/tour';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-details.html',
  styleUrls: ['./tour-details.scss']
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  tour: Tour | undefined;
  activeSlide = 0;
  private autoplayTimer: any;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tour = this.tourService.getTourById(+id);
      if (this.tour?.images?.length) {
        this.startAutoplay();
      }
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  goToSlide(index: number) {
    this.activeSlide = index;
    this.stopAutoplay();
    this.startAutoplay();
  }

  nextSlide() {
    const total = this.tour?.images?.length ?? 1;
    this.activeSlide = (this.activeSlide + 1) % total;
    this.stopAutoplay();
    this.startAutoplay();
  }

  prevSlide() {
    const total = this.tour?.images?.length ?? 1;
    this.activeSlide = (this.activeSlide - 1 + total) % total;
    this.stopAutoplay();
    this.startAutoplay();
  }

  private startAutoplay() {
    this.autoplayTimer = setInterval(() => this.nextSlide(), 5000);
  }

  private stopAutoplay() {
    clearInterval(this.autoplayTimer);
  }
}