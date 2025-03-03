// app/controllers/about.js
import Controller from '@ember/controller';

export default class AboutController extends Controller {
  // Mission statement content
  missionStatement =
    'Our practice combines cutting-edge medical technology with compassionate care to deliver exceptional patient outcomes. We maintain the highest standards of medical excellence while fostering a healing environment that puts patients first.';

  // Core values data
  values = [
    {
      icon: 'fa-heartbeat',
      title: 'Patient-Centered Care',
      description:
        'Tailored treatments prioritizing individual needs and comfort',
    },
    {
      icon: 'fa-flask',
      title: 'Medical Innovation',
      description: 'Pioneering advanced techniques for better health outcomes',
    },
    {
      icon: 'fa-hand-holding-medical',
      title: 'Compassionate Service',
      description: 'Delivering care with empathy and understanding',
    },
    {
      icon: 'fa-star-of-life',
      title: 'Clinical Excellence',
      description: 'Board-certified specialists maintaining highest standards',
    },
  ];

  // Leadership team data
  leaders = [
    {
      image: 'assets/images/doctor-1.png',
      name: 'Dr. Emily Sanchez',
      role: 'Chief Medical Officer',
      bio: 'Triple-board certified specialist with 20+ years experience in clinical leadership and healthcare innovation.',
      quote: 'True healthcare transforms both body and spirit',
    },
    {
      //image: '/images/leadership/operations-director.jpg',
      image: 'assets/images/doctor-1.png',
      name: 'Michael Chen',
      role: 'Director of Operations',
      bio: 'Healthcare management expert focused on optimizing patient experiences and clinical workflows.',
      quote: 'Excellence is the gradual result of always striving to do better',
    },
  ];

  // Statistics data
  stats = [
    { value: '25', label: 'Years of Service' },
    { value: '150', label: 'Medical Professionals' },
    { value: '500k', label: 'Patients Treated' },
    { value: '98%', label: 'Patient Satisfaction' },
  ];
}
