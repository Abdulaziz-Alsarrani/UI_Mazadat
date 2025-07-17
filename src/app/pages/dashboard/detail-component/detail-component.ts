import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css'
})
export class DetailComponent {
 
}
