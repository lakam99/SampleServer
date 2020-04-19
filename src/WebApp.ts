import {WebServer} from './WebServer.js';
import { WebServerResponse } from './WebServerResponse.js';

export class WebApp {
    private server:WebServer;

    constructor() {
        this.server = new WebServer(443);
        this.server.add_response("/", WebServer.SENDFILE, "C:/Users/super/nodeProjects/SampleServer/docs/index.html");
        this.server.add_response("/test", WebServer.SENDMSG, "<h3>Hello there!</h3>");
    }

    start() {
        this.server.start_server();
    }
}