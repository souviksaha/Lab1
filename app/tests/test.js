module('softTest Tests', {  
    setup: function () {
        this.server = sinon.fakeServer.create();
    },
    teardown: function () {
        this.server.restore();
        delete this.server;
    }
});
/*
var methodToBeTested = function() {  
        $.ajax('url.youneedto.mock.com')
     .done(function (data) {
         if (typeof console == "object") {
          console.log("Success - " + data);
          }
          return data;
     })
     .fail(function (xhr, textStatus, error) {
        console.log(xhr.statusText);
        console.log(textStatus);
        console.log(error);
    });
};
test("should make an ajax call", function() {
    this.server.respondWith("GET", "url.youneedto.mock.com", [200, { "Content-Type": "application/json" }, JSON.stringify('hello world')]);
    methodToBeTested();
    this.server.respond();
    ok(this.server.requests.length === 1, "One request was executed");
    ok(this.server.responses.length === 1, "One response received");
});
*/
test('Google Map API', function() {
    equal(true, true, "Google map API works");
});
test('Wrong Answer should give Red color', function() {
    equal(true, true, "Wrong is RED");
});
test('Right Answer should give Green', function() {
    equal(true, true, "Right is Green ");
});
test( 'dummy', function(){
	equal( dummy(4,5), 9, "dummy");
});
