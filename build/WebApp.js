"use strict";
exports.__esModule = true;
var WebServer_js_1 = require("./WebServer.js");
var WebApp = /** @class */ (function () {
    function WebApp() {
        this.server = new WebServer_js_1.WebServer(443);
        this.server.add_response("/", WebServer_js_1.WebServer.SENDFILE, "C:/Users/super/nodeProjects/SampleServer/docs/index.html");
        this.server.add_response("/test", WebServer_js_1.WebServer.SENDMSG, "<h3>Hello there!</h3>");
    }
    WebApp.prototype.start = function () {
        this.server.start_server();
    };
    return WebApp;
}());
exports.WebApp = WebApp;
