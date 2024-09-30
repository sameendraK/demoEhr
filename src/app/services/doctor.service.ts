import { Injectable } from '@angular/core';

export interface DoctorEnum {
  name: string
  age: number
  gender: string
  speciality: string
}

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  constructor() { }

  doctorsData: DoctorEnum[] = [
    {
      name: 'Kiran',
      age: 45,
      gender: "Male",
      speciality: "Ortho"
    },
    {
      name: 'Arun',
      age: 35,
      gender: "Male",
      speciality: "General Surgeon"
    },
    {
      name: 'Alakanada',
      age: 38,
      gender: "Female",
      speciality: "ENT"
    },
    {
      name: 'Ashok',
      age: 51,
      gender: "Male",
      speciality: "Heart"
    },
  ]
}
