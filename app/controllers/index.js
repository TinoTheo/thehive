import Controller from '@ember/controller';

export default class IndexController extends Controller {
  services = [
    {
      icon: 'heartbeat',
      title: 'Cardiology Care',
      description:
        'Advanced cardiovascular treatments using cutting-edge technology',
    },
    {
      icon: 'bone',
      title: 'Orthopedics',
      description:
        'Complete musculoskeletal care from sports injuries to joint replacement',
    },
    {
      icon: 'brain',
      title: 'Neurology',
      description: 'Specialized care for brain and nervous system disorders',
    },
  ];

  doctors = [
    {
      name: 'Dr. Sarah Whitman',
      specialty: 'Cardiothoracic Surgeon',
      image: '/assets/images/doctor-1.png',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      image: '/assets/images/doctor-1.png',
    },
    {
      name: 'Dr. Olivia Grant',
      specialty: 'Orthopedic Specialist',
      image: '/assets/images/doctor-1.png',
    },
    {
      name: 'Dr. Olivia Grant',
      specialty: 'Orthopedic Specialist',
      image: '/assets/images/doctor-1.png',
    },
  ];
}
