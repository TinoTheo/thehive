import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FooterComponent extends Component {
  @tracked currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Emergency Services', url: '/emergency' },
    { label: 'Find a Doctor', url: '/doctors' },
    { label: 'Patient Portal', url: '/portal' },
    { label: 'Careers', url: '/careers' },
  ];

  services = [
    { name: 'Primary Care', url: '/services/primary' },
    { name: 'Specialty Care', url: '/services/specialty' },
    { name: 'Surgical Services', url: '/services/surgery' },
    { name: 'Telemedicine', url: '/services/telemedicine' },
  ];
}
