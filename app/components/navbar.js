import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class NavigationBarComponent extends Component {
  @service router;
  @tracked isMenuOpen = false;

  menuItems = [
    { label: 'Services', route: 'services' },
    { label: 'Doctors', route: 'doctors' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  get currentRouteName() {
    return this.router.currentRouteName;
  }

  @action
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
