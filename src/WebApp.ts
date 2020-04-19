import {WebServer} from './WebServer.js';
import { WebServerResponse } from './WebServerResponse.js';

export class WebApp {
    private server:WebServer;

    constructor() {
        this.server = new WebServer(443);
        this.server.add_response("/", WebServer.SENDFILE, "C:/Users/super/nodeProjects/SampleServer/docs/index.html");
        this.server.add_response("/test", WebServer.SENDMSG, "<h1>Hello there!</h1>");
        this.server.add_response("*", WebServer.SENDMSG, "<h1>woaaaaaaaaah~! I can't find that page!!!!<h1>");
    }

    start() {
        this.server.start_server();
    }
}