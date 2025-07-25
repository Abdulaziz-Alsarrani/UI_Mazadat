import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auctions } from '../models/Auctions';

@Injectable({
  providedIn: 'root'
})
export class Auction {
    private ongoingAuctions: Auctions[] = [
    { auctionNumber: '22403422', chassisNumber: 'kg552333',plate:'2333 ر ح س	', date: '2025-07-01', startDate:'	2025-07-12', status: 'نشط' },
    { auctionNumber: '44403412', chassisNumber: 'kg552444',plate:'2773 ر ح س	', date: '2025-07-01', startDate:'	2025-07-12', status: 'نشط'  },
    { auctionNumber: '33403442', chassisNumber: 'kg552777',plate:'2213 ر ح س	', date: '2025-07-01', startDate:'	2025-07-12', status: 'نشط'  }
  ];

  private completedAuctions: Auctions[] = [
    { auctionNumber: '22400002', chassisNumber: 'ff552333',plate:'2355 ر ح س	', date: '2022-06-01', startDate:'	2022-07-12', status: 'منتهي' },
    { auctionNumber: '44433312', chassisNumber: 'kd552444',plate:'2473 ر ح س	', date: '2023-07-01', startDate:'	2024-07-12', status: 'منتهي'  },
    { auctionNumber: '11113442', chassisNumber: 'kg552777',plate:'1111 ر ح س	', date: '2025-04-01', startDate:'	2025-07-12', status: 'منتهي'  }
  ];


   getOngoingAuctions(): Observable<Auctions[]> {
    return of(this.ongoingAuctions);  
  }

  getCompletedAuctions(): Observable<Auctions[]> {
    return of(this.completedAuctions);  
  }
}
