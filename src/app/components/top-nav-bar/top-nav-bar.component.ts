import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent implements OnInit {

  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Messages', icon: 'pi pi-inbox' }
    ]
  }

  constructor() { }



}
