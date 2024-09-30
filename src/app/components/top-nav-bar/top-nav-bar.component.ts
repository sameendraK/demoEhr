import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [TabMenuModule, ButtonModule, MenuModule],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent implements OnInit {

  items: MenuItem[] | undefined;
  patientItems: MenuItem[] | undefined;
  activeItem: any = null;
  ngOnInit() {
    this.items = [
      { label: 'Patients', icon: 'pi pi-inbox', routerLink: 'patients' },
      { label: 'Doctors', icon: 'pi pi-chart-line', routerLink: 'doctors' },
      { label: 'Clinic', icon: 'pi pi-list', routerLink: 'clinic' },
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: 'dashboard' },
    ]
    this.patientItems = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          }
        ]
      }]
  }

  constructor(
    private router: Router
  ) {
  }

  onActiveItemChange(e: any) {
    console.log(e)
    //TODO: Need to change e.label as in routing it is showing the first letter as capital (that comes from label keys in the items array)
    this.router.navigate(['/', `${e.routerLink}`])
  }

}
