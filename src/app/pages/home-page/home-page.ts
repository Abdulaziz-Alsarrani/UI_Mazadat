import { Component, OnInit  } from '@angular/core';
import { Auction } from '../../services/auction';
import { Auctions } from '../../models/Auctions';
import { DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home-page',
  imports: [DatePipe, NgFor],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit {
 selectedTab: 'مستمر' | 'منتهي' = 'مستمر';
 ongoingAuctions: Auctions[] = [];
 completedAuctions: Auctions[] = [];


  constructor(private auctionService: Auction) {}

  ngOnInit() {
    this.auctionService.getOngoingAuctions().subscribe(data => {this.ongoingAuctions = data;});
    this.auctionService.getCompletedAuctions().subscribe(data => {this.completedAuctions = data;});
  }

   get currentAuctions(): Auctions[] {
    return this.selectedTab === 'مستمر' ? this.ongoingAuctions : this.completedAuctions;
  }
}
