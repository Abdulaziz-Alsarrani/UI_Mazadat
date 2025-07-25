import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../services/sidebar';


@Component({
  selector: 'app-side-nav',
  imports: [RouterLink],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css'
})
export class SideNav implements OnInit {
  dropdownOpen = false;
  sidebarOpen = false;


  constructor(private sidebarService: Sidebar) {}

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe(open => {
       console.log('Sidebar open state:', open);
      this.sidebarOpen = open;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }
}
