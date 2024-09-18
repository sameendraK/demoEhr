import { Component } from '@angular/core';
import { TopNavBarComponent } from '../top-nav-bar/top-nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
