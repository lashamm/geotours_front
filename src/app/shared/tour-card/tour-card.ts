import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tour } from '../../services/tour';

@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-card.html',
  styleUrls: ['./tour-card.scss']
})
export class TourCardComponent {
  @Input() tour!: Tour;
}
