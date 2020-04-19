"use strict";
exports.__esModule = true;
var express = require("express");
var WebServerResponse_1 = require("./WebServerResponse");
var WebServer = /** @class */ (function () {
    function WebServer(port) {
        this.set_port(port);
        this.express_obj = express();
        this.responses = [];
        this.server_started = false;
    }
    WebServer.prototype.add_response = function (request_name, request_method, request_parameter) {
        this.responses.push(new WebServerResponse_1.WebServerResponse(request_name, request_method, request_parameter));
    };
    WebServer.prototype.prepare_responses = function () {
        var _this = this;
        this.get_responses().forEach(function (prepared_response) {
            _this.get_server().get(prepared_response.request_name, function (res, clientConnection) {
                switch (prepared_response.method) {
                    case WebServer.SENDFILE:
                        clientConnection.sendFile(prepared_response.parameter);
                        break;
                    case WebServer.SENDMSG:
                        clientConnection.send(prepared_response.parameter);
                        break;
                    default:
                        clientConnection.send("Invalid parameter " + prepared_response.parameter + " passed.");
                        break;
                }
            });
        });
    };
    WebServer.prototype.start_server = function () {
        var _this = this;
        this.prepare_responses();
        this.get_server().listen(this.get_port(), function () { console.log("Listening on " + _this.get_port()); _this.server_started = true; });
    };
    WebServer.prototype.get_responses = function () {
        return this.responses;
    };
    WebServer.prototype.set_port = function (port) { this.port = port; };
    WebServer.prototype.get_port = function () { return this.port; };
    WebServer.prototype.get_server = function () { return this.express_obj; };
    ;
    WebServer.SENDFILE = 0;
    WebServer.SENDMSG = 1;
    return WebServer;
}());
exports.WebServer = WebServer;
