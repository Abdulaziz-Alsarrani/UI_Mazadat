import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { BottomNav } from './components/bottom-nav/bottom-nav';
import { SideNav } from './components/side-nav/side-nav';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, BottomNav, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'UI_Mazadat';
}
