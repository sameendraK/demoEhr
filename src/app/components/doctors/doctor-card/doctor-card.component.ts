import { Component, Input, SimpleChanges } from '@angular/core';
import { DoctorEnum, DoctorService } from '../../../services/doctor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.scss'
})
export class DoctorCardComponent {

  @Input()
  doctorCardDetails: DoctorEnum | undefined;

  constructor(
    private doctorService: DoctorService
  ) {

  }
  ngOnInit() {
    // this.doctorCardDetails = this.doctorService.doctorsData;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // this.doctorCardDetails = changes;
  }
}
