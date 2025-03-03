import EmberRouter from '@ember/routing/router';
import config from 'thehive/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('services');
  this.route('doctors');
  this.route('about');
  this.route('contact');
});
