import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  locatioPrefix: config.locatioPrefixType
});

Router.map(function() {
  this.route('artifacts');
  this.route('artifact', { path: '/artifact/:artifact_id' });
  this.route('bots');
  this.route('bot', { path: '/bot/:bot_id' });
  this.route('new-artifact');
  this.route('new-bot');
});

export default Router;
