import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { DetailComponent } from '../dashboard/detail-component/detail-component';
import { LoseComponent } from '../dashboard/lose-component/lose-component';
import { WinComponent } from '../dashboard/win-component/win-component';
import { SliderComponent } from '../dashboard/slider-component/slider-component';

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [CommonModule, DetailComponent, FormsModule,LoseComponent,WinComponent, SliderComponent],
  templateUrl: './info-page.html',
  styleUrl: './info-page.css'
})
export class InfoPage {
  minutes: number = 0;
  seconds: number = 30;
  timerDisplay: string = '0:30';
  timerEnded: boolean = false;
  purchased: boolean = false;

  quantity: number = 10000;
  maxPrice: number = 20000;
  userBid: number = 0;

  // Confirmation dialog
  showDialog: boolean = false;
  doNotShowAgain: boolean = false;

  // Alert message
  purchaseMessage: string = '';
  isPurchaseSuccess: boolean = false;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(timerInterval);
          this.timerEnded = true;
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }

      this.timerDisplay = `${this.minutes}:${this.seconds < 10 ? '0' : ''}${this.seconds}`;
    }, 1000);
  }

  increase() {
    this.quantity += 10000;
  }

  decrease() {
    if (this.quantity > 10000) {
      this.quantity -= 10000;
    }
  }

  onShowDialog() {
    if (!this.doNotShowAgain) {
      this.showDialog = true;
    } else {
      this.buyProduct();
    }
  }

  confirmPurchase() {
    this.showDialog = false;
    this.buyProduct();
  }

  cancelDialog() {
    this.showDialog = false;
  }

  buyProduct() {
    if (this.quantity > this.maxPrice) {
      this.isPurchaseSuccess = true;
      this.purchaseMessage = `✅ تمت عملية المزايدة بنجاح بمبلغ ${this.quantity} ريال`;
      this.userBid = this.quantity;
      this.purchased = true;
    } else {
      this.isPurchaseSuccess = false;
      this.purchaseMessage = `❌ خطأ: المبلغ أقل من أعلى مزايدة (${this.maxPrice} ريال)`;
    }
  }
}
