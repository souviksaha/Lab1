module('softTest Tests', {  
    setup: function () {
        this.server = sinon.fakeServer.create();
    },
    teardown: function () {
        this.server.restore();
        delete this.server;
    }
});
test('Google Map API', function() {
    equal( mapi.init(), true, "Google map API works");
});
test('Wrong Answer should give Red color', function() {
    equal(mapi.wrong(), 'RED', "Wrong is RED");
});
test('Right Answer should give Green', function() {
    equal(mapi.right(), 'GREEN', "Right is Green ");
});
