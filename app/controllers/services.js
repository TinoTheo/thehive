import Controller from '@ember/controller';

export default class ServicesController extends Controller {
  services = [
    {
      icon: 'heartbeat',
      title: 'Cardiology',
      description:
        'Comprehensive heart care from prevention to advanced treatments',
      features: [
        'Non-invasive diagnostics',
        'Cardiac rehabilitation',
        'Interventional procedures',
        '24/7 emergency care',
      ],
      // link: '',
    },
    {
      icon: 'bone',
      title: 'Orthopedics',
      description:
        'Specialized care for bones, joints, and musculoskeletal system',
      features: [
        'Joint replacement surgery',
        'Sports medicine',
        'Physical therapy',
        'Pain management',
      ],
      //link: 'services.orthopedics',
    },
    {
      icon: 'brain',
      title: 'Neurology',
      description: 'Expert care for brain and nervous system disorders',
      features: [
        'Epilepsy treatment',
        'Stroke care',
        'Movement disorders',
        'Neuro-rehabilitation',
      ],
      // link: 'services.neurology',
    },
  ];
}
