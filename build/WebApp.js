"use strict";
exports.__esModule = true;
var WebServer_js_1 = require("./WebServer.js");
var WebApp = /** @class */ (function () {
    function WebApp() {
        this.server = new WebServer_js_1.WebServer(443);
        this.server.add_response("/", WebServer_js_1.WebServer.SENDFILE, "C:/Users/super/nodeProjects/SampleServer/docs/index.html");
        this.server.add_response("/test", WebServer_js_1.WebServer.SENDMSG, "<h1>Hello there!</h1>");
        this.server.add_response("*", WebServer_js_1.WebServer.SENDMSG, "<h1>woaaaaaaaaah~! I can't find that page!!!!<h1>");
    }
    WebApp.prototype.start = function () {
        this.server.start_server();
    };
    return WebApp;
}());
exports.WebApp = WebApp;
