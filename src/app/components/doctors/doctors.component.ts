import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { DoctorEnum, DoctorService } from '../../services/doctor.service';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { CommonModule } from '@angular/common';
// import { SchedulerComponent } from '../scheduler/scheduler.component';


@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [FilterComponent, DoctorCardComponent, CommonModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent implements OnInit {

  filterCriterias: any[] = [];

  doctorCardDetails: DoctorEnum[] = [];

  constructor(
    private doctorService: DoctorService

  ) {
    this.filterCriterias = [
      {
        filterType: 'text',
        val: "Name",
        label: "Name"
      },
      {
        filterType: 'dropdown',
        speciality: ['General Suregon', 'Ortho', 'ENT'],
        label: "Speciality"
      },
      {
        filterType: 'text',
        val: "Age",
        label: "Age"
      },
      {
        filterType: 'dropdown',
        speciality: ['General Suregon', 'Ortho', 'ENT'],
        label: "Speciality"
      },
      {
        filterType: 'text',
        val: "Age",
        label: "Age"
      },
    ]
  }

  ngOnInit(): void {
    this.doctorCardDetails = this.doctorService.doctorsData;
    console.log(this.doctorCardDetails)
  }

}
