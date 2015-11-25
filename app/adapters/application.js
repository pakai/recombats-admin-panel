import DS from 'ember-data';
import ENV from 'recombats-admin-panel/config/environment';

let adapter = DS.RESTAdapter.extend({
  namespace: 'api'
});
if (/*true || */ ENV.environment === 'production') {

  adapter = DS.RESTAdapter.extend({
      location: 'http://www.recombats.com/caveedit_1/CaveEdit.php',
      do: {
        get: {
          artifact: 'get_objects',
          bot: 'get_bots'
        },
        set: {
          artifact: 'save_object',
          bot: 'save_bot'
        }
      },
      findAll: function (store, type, sinceToken) {
        var url = this.location;
        var query = {
          action: 'proceed',
          do: this.do.get[type.modelName]
        };
        if (sinceToken) {
          query.sinceToken = sinceToken;
        }

        return this.ajax(url, 'GET', {
          data: query
        });
      },
      findRecord: function (store, type, id, snapshot) {
        var url = this.location;
        var query = {
          action: 'proceed',
          do: this.do.get[type.modelName],
          id: id
        };

        return this.ajax(url, 'GET', {
          data: query
        });
      },
      updateRecord: function (store, type, snapshot) {
        var data = {
          action: 'proceed',
          do: this.do.set[type.modelName],
          id: snapshot.id
        };
        var serializer = store.serializerFor(type.modelName);
        var url = this.location;

        serializer.serializeIntoHash(data, type, snapshot);

        return this.ajax(url, "POST", {
          data: data
        });
      }
    }
  )
  ;
}

export default adapter;
