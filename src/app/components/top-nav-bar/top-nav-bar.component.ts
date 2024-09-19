import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [TabMenuModule, ButtonModule],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent implements OnInit {

  items: MenuItem[] | undefined;
  activeItem: any = null;
  ngOnInit() {

  }

  constructor(
    private router: Router
  ) {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Messages', icon: 'pi pi-inbox' }
    ]
  }

  onActiveItemChange(e: any) {
    console.log(e)
    this.router.navigate(['/',`${e.label}`])
  }

}
