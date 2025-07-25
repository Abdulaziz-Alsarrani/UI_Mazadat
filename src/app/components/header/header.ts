import { Component } from '@angular/core';
import { Sidebar } from '../../services/sidebar';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    constructor(private sidebarService: Sidebar) {}

  toggleSidebar() {
      console.log('Hamburger clicked');
    this.sidebarService.toggleSidebar();
  }
}
