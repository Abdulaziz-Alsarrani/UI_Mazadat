import { Component } from '@angular/core';

@Component({
  selector: 'app-mazadat-page',
  imports: [],
  templateUrl: './mazadat-page.html',
  styleUrl: './mazadat-page.css'
})
export class MazadatPage {
 selectedTab: 'الكل' | 'جديد' | 'مستعمل' = 'الكل';
}
