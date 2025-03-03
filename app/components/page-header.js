// app/components/page-header.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PageHeaderComponent extends Component {
  get backgroundStyle() {
    if (this.args.backgroundImage) {
      return `background-image: url(${this.args.backgroundImage})`;
    }
    return '';
  }
}
