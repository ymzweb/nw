/* jshint expr: true */
module.exports = {
    '@tags': ['book'],
    beforeEach: function(client) {

    },
    after: function(client) {
        client.end();
    },
    wGroup: {
        book_url: "https://example.myApi.mycompany.in"
    },

    userSettings: Array(),

    "Get all settings": function(client, done) {
        var widget = this.wGroup;
        client.getreq(widget.book_url + "/api/store", widget, function(response) {
            client.assert.equal(response.statusCode, 200, "201 Created");
            var objects = response.body.objects;
            client.userSettings = objects;
            console.log('Found number of settings: ' + client.userSettings.length);
            client.end();
        });
    },

    "Remove settings": function(client, done) {
        var widget = this.wGroup;
        var objects = client.userSettings;
        for (i = 0; i < objects.length; i++) {
            var obj = objects[i];
            console.log('Removing user settings id ' + obj.id);
            client.deletereq(widget.book_url: l + "/api/store" + obj.id, widget, function(resp) {
                client.assert.equal(resp.statusCode, 204, "204 Created");
                client.end();
            });
        }
    },
};
