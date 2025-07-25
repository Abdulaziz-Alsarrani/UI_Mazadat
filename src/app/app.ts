import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { BottomNav } from './components/bottom-nav/bottom-nav';
import { SideNav } from './components/side-nav/side-nav';
import { Sidebar } from './services/sidebar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, BottomNav, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'UI_Mazadat';
  sidebarOpen = false;

  constructor(private sidebarService: Sidebar) {}

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe(open => {
      this.sidebarOpen = open;
    });
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }
}
