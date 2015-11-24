import DS from 'ember-data';
import ENV from 'recombats-admin-panel/config/environment';

let adapter = DS.RESTAdapter.extend({
  namespace: 'api'
});
if ( /*true || */ ENV.environment === 'production') {

  adapter = DS.RESTAdapter.extend({
    location: 'http://www.recombats.com/caveedit_1/CaveEdit.php',
    do: {
      artifact: 'get_objects',
      bot: 'get_bots'
    },
    findAll: function(store, type, sinceToken) {
      var url = this.location;
      var query = {
        action: 'proceed',
        do: this.do[type.modelName]
      };
      if (sinceToken) {
        query.sinceToken = sinceToken;
      }

      return this.ajax(url, 'GET', {
        data: query
      });
    },
    findRecord: function(store, type, id, snapshot) {
      var url = this.location;
      var query = {
        action: 'proceed',
        do: this.do[type.modelName],
        id: id
      };

      return this.ajax(url, 'GET', {
        data: query
      });
    },
    updateRecord: function(store, type, snapshot) {
      var data = {};
      var serializer = store.serializerFor(type.modelName);

      serializer.serializeIntoHash(data, type, snapshot);

      var id = snapshot.id;
      var url = this.location;

      return this.ajax(url, "POST", {
        data: data
      });
    },
  });
}

export default adapter;
