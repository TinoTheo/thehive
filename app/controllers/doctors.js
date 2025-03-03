// app/controllers/doctors.js
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DoctorsController extends Controller {
  queryParams = ['specialty'];
  @tracked specialty = null;

  specialties = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Oncology',
  ];

  doctors = [
    {
      name: 'Dr. Sarah Whitman',
      specialty: 'Cardiology',
      experience: 15,
      education: 'Harvard Medical School',
      image: '/assets/images/doctor-1.png',
    },

    {
      name: 'Dr. Sarah Whitman',
      specialty: 'Cardiology',
      experience: 15,
      education: 'Harvard Medical School',
      image: '/assets/images/doctor-1.png',
    },

    {
      name: 'Dr. Sarah Whitman',
      specialty: 'Cardiology',
      experience: 15,
      education: 'Harvard Medical School',
      image: '/assets/images/doctor-1.png',
    },
    // Add more doctor objects
  ];

  get filteredDoctors() {
    if (!this.specialty) return this.doctors;
    return this.doctors.filter(
      (doctor) =>
        doctor.specialty.toLowerCase() === this.specialty.toLowerCase(),
    );
  }

  @action
  filterBySpecialty(specialty) {
    this.specialty = specialty === this.specialty ? null : specialty;
  }
}
